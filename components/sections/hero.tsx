"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const bgX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const bgY = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const midX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const midY = useTransform(sy, [-0.5, 0.5], [22, -22]);

  const frontX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const frontY = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  const rotX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="perspective-2000 relative h-screen min-h-[720px] w-full overflow-hidden bg-ink"
    >
      {/* Layer 1 — far background image with subtle parallax */}
      <motion.div
        className="absolute inset-[-6%]"
        style={{ x: bgX, y: bgY, scale: 1.06 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=85"
          alt="Port cranes at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      </motion.div>

      {/* Layer 2 — floating geometric depth elements */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ x: midX, y: midY }}
      >
        {/* Compass ring */}
        <div className="absolute right-[6%] top-[18%] hidden lg:block">
          <div className="animate-spin-slow relative h-[420px] w-[420px] opacity-25">
            <div className="absolute inset-0 rounded-full border border-copper/40" />
            <div className="absolute inset-8 rounded-full border border-copper/25" />
            <div className="absolute inset-20 rounded-full border border-copper/15" />
            {/* tick marks */}
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-0 h-3 w-px bg-copper/40"
                style={{ transform: `translateX(-50%) rotate(${i * 15}deg)`, transformOrigin: "50% 210px" }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
          </div>
        </div>
        {/* Soft copper glow blob */}
        <div className="absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-copper/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-deep blur-[100px] opacity-60" />
      </motion.div>

      <div className="grain" />

      {/* Layer 3 — content with 3D tilt */}
      <motion.div
        className="preserve-3d relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-20 pt-40 lg:px-12 lg:pb-32"
        style={{ rotateX: rotX, rotateY: rotY, x: frontX, y: frontY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="h-px w-10 bg-copper" />
          <p className="text-xs uppercase tracking-[0.3em] text-copper">
            Maritime Agency · Port of Djibouti
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-[13vw] leading-[0.92] tracking-tight text-paper sm:text-[11vw] lg:text-[9.5vw] xl:text-[148px]"
          style={{
            transform: "translateZ(80px)",
            textShadow: "0 30px 60px rgba(0,0,0,0.55)",
          }}
        >
          From the world
          <br />
          <span className="italic text-copper/95">to Djibouti.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          style={{ transform: "translateZ(50px)" }}
        >
          <p className="max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
            Oceangate facilitates every port call with tailor-made solutions,
            rapid execution, and transparent follow-up — 24/7, in six languages,
            at the gateway of the Red Sea.
          </p>

          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.22em] text-fog">
            <span className="h-px w-6 bg-fog" />
            <span>Scroll</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-fog lg:flex">
        <span>24/7</span>
        <span className="h-px w-8 bg-line" />
        <span>6 Languages</span>
        <span className="h-px w-8 bg-line" />
        <span>Red Sea</span>
      </div>
    </section>
  );
}
