"use client";

import { motion } from "framer-motion";

const eras = [
  {
    era: "19th century",
    title: "The beginnings of Djibouti's port",
    description:
      "A strategic foothold established at the mouth of the Red Sea, the port of Djibouti opens its gates to the world.",
  },
  {
    era: "20th century",
    title: "An essential stop on the Red Sea route",
    description:
      "With the Suez Canal operating at full capacity, Djibouti establishes itself as an unavoidable call on the world's busiest maritime corridor.",
  },
  {
    era: "21st century",
    title: "A strategic hub — and Oceangate as its reference",
    description:
      "Through the sustained investment and innovation led by the Ports and Free Zones Authority, Djibouti has become one of the region's most strategic maritime hubs. Carried by this international standing, Oceangate stands today as the essential partner for every operator engaged in commercial maritime activity.",
  },
];

export function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-abyss py-32 lg:py-44"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-copper" />
            <p className="text-xs uppercase tracking-[0.3em] text-copper">
              Heritage
            </p>
          </div>
          <h2 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Three centuries of
            <br />
            <span className="italic text-copper">maritime legacy.</span>
          </h2>
        </motion.div>

        <div className="mt-24 grid gap-px bg-line lg:grid-cols-3">
          {eras.map((e, i) => (
            <motion.div
              key={e.era}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-abyss p-10 lg:p-12"
            >
              <span className="font-display text-7xl text-copper/20 lg:text-8xl">
                0{i + 1}
              </span>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-copper">
                {e.era}
              </p>
              <h3 className="font-display mt-4 text-2xl leading-tight text-paper lg:text-3xl">
                {e.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-fog">
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
