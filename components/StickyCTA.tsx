"use client";

import { useEffect, useState } from "react";

/**
 * StickyCTA — appears after the user scrolls past the hero (~80vh).
 * Hidden on small screens via tailwind's md: prefix to avoid covering content.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-[var(--surface-contrast)] px-6 py-3 font-body text-sm font-medium text-[var(--surface)] shadow-xl transition hover:opacity-90 md:inline-flex"
    >
      {"Book now"}
    </a>
  );
}
