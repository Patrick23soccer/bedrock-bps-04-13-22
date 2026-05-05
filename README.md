# Bedrock Property Services

Built with [WebCraft Studio](https://github.com/webcraft) — Next.js 15 + Tailwind + Framer Motion.

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in RESEND_API_KEY etc
npm run dev
```

## Pre-launch checklist (handed off at scaffold time)

- [ ] Replace placeholder NAP (Name, Address, Phone) in `components/Footer.tsx` and JSON-LD
- [ ] Set `RESEND_API_KEY`, `CONTACT_INBOX`, `CONTACT_FROM` in Vercel project env
- [ ] Have counsel review `app/privacy/page.tsx` and `app/terms/page.tsx` drafts
- [ ] Verify `LocalBusiness` JSON-LD fields match the real business
- [ ] Test `/api/contact` end-to-end with a real form submission

## Signature: Heritage Trade — Inspector

Per-vertical visual identity locked at scaffold time. See `app/globals.css` for tokens.
