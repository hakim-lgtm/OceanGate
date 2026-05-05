"use client";

import { motion } from "framer-motion";
import { Tilt3D } from "@/components/tilt-3d";

const stats = [
  { value: "24 / 7", label: "Operational availability" },
  { value: "6", label: "Languages spoken" },
  { value: "N°1", label: "Port in East Africa" },
  { value: "∞", label: "Partner commitment" },
];

const marqueeItems = [
  "Ship Agency",
  "Port Assistance",
  "Cargo Handling",
  "Customs",
  "Digital Reporting",
  "Bunkering",
  "Technical Repairs",
  "Shipowner Representation",
];

export function Stats() {
  return (
    <section className="relative bg-ink">
      {/* Marquee */}
      <div className="relative flex overflow-hidden border-y border-line py-8">
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-5xl italic text-paper/80 lg:text-6xl"
            >
              {item}
              <span className="ml-16 text-copper">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="perspective-1200 mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt3D
                max={14}
                scale={1.04}
                className="border-t border-line pt-8"
                innerClassName=""
              >
                <p
                  className="font-display text-6xl tracking-tight text-paper lg:text-7xl"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-5 text-xs uppercase tracking-[0.22em] text-fog"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {s.label}
                </p>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
