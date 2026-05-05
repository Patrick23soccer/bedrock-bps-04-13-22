"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad_status");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        {"Get in touch."}
      </h2>
      <p className="mt-4 text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
        {"Serving Hamilton, Ancaster, Dundas, Stoney Creek, and the surrounding area. Book online or call directly."}
      </p>
      <form onSubmit={onSubmit} className="mt-10 grid gap-5">
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Name</span>
          <input
            required
            name="name"
            className="rounded-md border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.2)] bg-transparent px-4 py-3"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Email</span>
          <input
            required
            type="email"
            name="email"
            className="rounded-md border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.2)] bg-transparent px-4 py-3"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Phone (optional)</span>
          <input
            name="phone"
            className="rounded-md border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.2)] bg-transparent px-4 py-3"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="rounded-md border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.2)] bg-transparent px-4 py-3"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--surface-contrast)] px-7 py-3.5 font-body text-sm font-medium text-[var(--surface)] transition hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "ok" && (
          <p className="text-sm text-emerald-700">Thanks — we&apos;ll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">Something went wrong. Please try again or email us directly.</p>
        )}
      </form>
    </section>
  );
}
