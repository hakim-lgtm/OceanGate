"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-ink py-32 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-copper" />
          <p className="text-xs uppercase tracking-[0.3em] text-copper">
            Our mission
          </p>
        </motion.div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl xl:text-[88px]">
              Next-generation
              <br />
              <span className="italic text-copper">maritime services.</span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-[1.7] text-paper-dim sm:text-lg">
              Oceangate provides local, fast, human, and hassle-free maritime
              services. We don&apos;t just manage port calls — we create a
              seamless, proactive, and reassuring experience for shipowners
              and crews.
            </p>

            <p className="mt-6 max-w-xl text-base leading-[1.7] text-fog">
              Our teams are available around the clock with no language
              barriers: French, English, Somali, Arabic, Afar, and Chinese.
              Real-time digital transparency at every step — no surprises, no
              ambiguity.
            </p>

            <ul className="mt-12 space-y-4 text-sm">
              {[
                "Direct access to the Red Sea & global trade routes",
                "Modern & continuously improving infrastructure",
                "Efficient port services & proactive operations",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4 text-paper">
                  <span className="mt-[0.6em] h-px w-6 shrink-0 bg-copper" />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85"
              alt="Container ship"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.25em] text-copper">
                The Trusted Partner
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
