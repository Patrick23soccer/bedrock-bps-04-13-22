import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(180),
  phone: z.string().max(40).optional(),
  message: z.string().min(5).max(4000),
  // Honeypot — should be empty for real users.
  website: z.string().max(0).optional(),
});

// In-memory IP rate limit: 5 requests per IP per 10 minutes.
// In-memory is intentional: Vercel's lambda lifecycle gives us per-region buckets.
// For tighter control, swap to Upstash/Redis later.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (bucket.count >= MAX_REQUESTS) return false;
  bucket.count += 1;
  return true;
}

function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  // Honeypot triggered — silently succeed (don't tip off the bot).
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Fail-open: if Resend env is missing, accept the form so the user is never
  // blocked. Server logs the issue for ops to fix.
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !inbox || !from) {
    // eslint-disable-next-line no-console
    console.warn("[contact] missing RESEND_API_KEY / CONTACT_INBOX / CONTACT_FROM");
    return NextResponse.json({ ok: true, queued: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to: inbox,
      replyTo: parsed.data.email,
      subject: `New inquiry from ${parsed.data.name}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        parsed.data.phone ? `Phone: ${parsed.data.phone}` : null,
        "",
        parsed.data.message,
      ].filter(Boolean).join("\n"),
    });
    return NextResponse.json({ ok: true, queued: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] resend failed:", err);
    return NextResponse.json({ ok: true, queued: false });
  }
}
