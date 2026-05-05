"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";

/**
 * 4-layer 3D hero (build-page SKILL.md §6.6):
 *   Layer 1 — cursor-tracked photo tilt
 *   Layer 2 — multi-layer scroll parallax (bg slow positive, mid negative, fg fastest negative)
 *   Layer 3 — depth-of-field text-shadow on display headline
 *   Layer 4 — cursor-following spotlight (driven from same --mx/--my as Layer 1)
 *
 * Tilt amounts (3 / 2) are signature-locked at scaffold time.
 * All layers gated behind reduced-motion + (pointer: fine).
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Layer 1 — cursor tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 18 });
  const sy = useSpring(y, { stiffness: 140, damping: 18 });
  // Tilt amounts locked at scaffold time per design-system §6.7.
  // Industrial Brutalist sets both to 0 to flatten the tilt.
  const tiltY = /* @scaffold:TILT_Y */ 2;
  const tiltX = /* @scaffold:TILT_X */ 3;
  const ry = useTransform(sx, [-0.5, 0.5], [-tiltY, tiltY]);
  const rx = useTransform(sy, [-0.5, 0.5], [tiltX, -tiltX]);

  // Layer 2 — scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -115]);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    function move(e: PointerEvent) {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      x.set(nx - 0.5);
      y.set(ny - 0.5);
      el.style.setProperty("--mx", String(nx));
      el.style.setProperty("--my", String(ny));
    }
    function leave() {
      x.set(0);
      y.set(0);
    }
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [reduced, x, y]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88vh] overflow-hidden"
    >
      {/* Layer 2 background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] to-[color:oklch(from_var(--accent-primary)_l_c_h_/_0.05)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-32">
        {/* Layer 2 midground — eyebrow */}
        <motion.div style={{ y: yMid }}>
          <p className="font-body text-sm uppercase tracking-[0.18em] text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.6)]">
            {"Hamilton Home Inspections"}
          </p>
        </motion.div>

        {/* Layer 2 foreground — display headline */}
        <motion.div style={{ y: yFg }} className="mt-6">
          <h1 className="hero-display font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
            {"Read the house before you sign."}
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
            {"Bedrock delivers structured, photo-documented inspection reports so you know exactly what you're buying."}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[var(--surface-contrast)] px-7 py-3.5 font-body text-sm font-medium text-[var(--surface)] transition hover:opacity-90"
            >
              {"Start the call"}
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.2)] px-7 py-3.5 font-body text-sm font-medium transition hover:border-[var(--surface-contrast)]"
            >
              See our work
            </a>
          </div>
        </motion.div>

        {/* Layer 1 + Layer 4 — tilt wrapper + spotlight */}
        <div ref={ref} style={{ perspective: "1400px" }} className="relative mt-16">
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--surface-contrast)] shadow-2xl"
          >
            <div className="hero-spotlight" aria-hidden />
            <div className="absolute inset-0 grid place-items-center text-[var(--surface)]/30 font-display text-2xl">
              {"Inspector reviewing clipboard at exterior of older brick home, overcast natural light, Hamilton streetscape visible"}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
