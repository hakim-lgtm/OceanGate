"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Djibouti() {
  return (
    <section
      id="djibouti"
      className="relative overflow-hidden bg-deep py-32 lg:py-44"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-deep to-abyss" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-copper" />
              <p className="text-xs uppercase tracking-[0.3em] text-copper">
                A global maritime hub
              </p>
            </div>

            <h2 className="font-display mt-8 text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Strategic gateway
              <br />
              <span className="italic text-copper">between continents.</span>
            </h2>

            <div className="mt-10 space-y-5 text-base leading-[1.75] text-paper-dim">
              <p>
                Located at the crossroads of the Red Sea and the Gulf of Aden,
                Djibouti has established itself as a key player in global
                maritime trade. Its coasts welcome ships from Africa, the
                Middle East, and Asia.
              </p>
              <p>
                With the opening of the Suez Canal, Djibouti became an
                essential stopover for international shipping. Its port —
                among the most modern in Africa — now supports regional
                logistics and maritime security.
              </p>
              <p className="text-fog">
                From artisanal fishing to large-scale transit operations,
                Djibouti&apos;s maritime world blends tradition, innovation,
                and international ambition.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
              <div className="border-l border-copper pl-5">
                <p className="font-display text-4xl text-paper">01</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                  Major Port
                </p>
                <p className="mt-1 text-sm text-fog">Modern facilities & logistics</p>
              </div>
              <div className="border-l border-copper pl-5">
                <p className="font-display text-4xl text-paper">02</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                  Global Reach
                </p>
                <p className="mt-1 text-sm text-fog">Between continents</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[5/6] overflow-hidden lg:aspect-[4/5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1566731905993-4c0a82c76ec3?auto=format&fit=crop&w=1400&q=85"
              alt="Red Sea region map"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />

            {/* Coordinate overlay */}
            <div className="absolute inset-6 flex flex-col justify-between text-[10px] uppercase tracking-[0.3em] text-paper/70">
              <div className="flex items-start justify-between">
                <span>11°35&apos;N</span>
                <span>43°08&apos;E</span>
              </div>
              <div className="flex items-end justify-between">
                <span>Port of Djibouti</span>
                <span>Red Sea · Gulf of Aden</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
