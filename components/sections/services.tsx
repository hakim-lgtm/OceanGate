"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Service = {
  num: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Ship Agency",
    description:
      "Commercial, military, and offshore vessels. Coordinating arrivals, departures, docking, and all port formalities.",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "02",
    title: "Cargo Handling",
    description:
      "Efficient loading, unloading, and transportation of goods with rigorous logistics oversight.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "03",
    title: "Customs & Admin",
    description:
      "Managing permits, documentation, and regulatory compliance across all jurisdictions.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "04",
    title: "Digital Reporting",
    description:
      "Keeping accurate records and digital traceability of all operations, shared in real time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "05",
    title: "Shipowners' Representation",
    description:
      "Safeguarding legal, financial, and operational interests of our partners in Djibouti.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "06",
    title: "Bunkering & Ship Supply",
    description:
      "Supplying fuel, provisions, and essential materials for vessels of every class.",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "07",
    title: "Technical Assistance",
    description:
      "On-demand maintenance, spare parts supply, and rapid problem-solving for emergencies.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "08",
    title: "Crew Services",
    description:
      "Crew change, embarkation and disembarkation, immigration, hotels, flights, ground transport, and medical assistance — 24/7.",
    image:
      "https://images.unsplash.com/photo-1559587995-d3b89e8b94f4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    num: "09",
    title: "Logistics & Warehousing",
    description:
      "End-to-end logistics from vessel discharge to inland delivery — trucking, transit, and warehousing across Djibouti and the corridor.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-ink py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-copper" />
              <p className="text-xs uppercase tracking-[0.3em] text-copper">
                What we do
              </p>
            </div>
            <h2 className="font-display mt-8 text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Nine services.
              <br />
              <span className="italic text-copper">One standard.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base leading-[1.7] text-fog lg:pb-4"
          >
            A complete range of maritime operations, engineered for vessels,
            crews, and partners who expect precision at every stage.
          </motion.p>
        </div>

        <div
          className="mt-20 border-t border-line"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <ServiceRow
              key={s.num}
              service={s}
              index={i}
              isActive={active === i}
              onHover={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  isActive,
  onHover,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      className={cn(
        "group relative grid cursor-default grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 transition-colors duration-500 md:grid-cols-[80px_1fr_2fr_auto] lg:py-10",
        isActive ? "bg-deep/40" : ""
      )}
    >
      <span className="font-display text-sm text-copper md:text-base">
        {service.num}
      </span>

      <h3
        className={cn(
          "font-display text-2xl tracking-tight transition-colors duration-500 sm:text-3xl md:text-4xl lg:text-[44px]",
          isActive ? "text-paper" : "text-paper/85"
        )}
      >
        {service.title}
      </h3>

      <p className="hidden max-w-md text-sm leading-relaxed text-fog md:block">
        {service.description}
      </p>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className={cn(
          "h-5 w-5 transition-all duration-500",
          isActive ? "translate-x-1 text-copper" : "text-fog"
        )}
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Floating 3D preview card */}
      <div
        className={cn(
          "pointer-events-none absolute right-8 top-1/2 hidden aspect-[3/4] w-56 -translate-y-1/2 transition-all duration-500 lg:block",
          isActive
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0"
        )}
        style={{
          transform: isActive
            ? "translateY(-50%) perspective(900px) rotateY(-12deg) rotateX(4deg)"
            : "translateY(-50%) perspective(900px) rotateY(-22deg) rotateX(8deg)",
          transformStyle: "preserve-3d",
          transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 500ms",
        }}
      >
        <div className="shadow-3d relative h-full w-full overflow-hidden rounded-sm ring-1 ring-copper/20">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="224px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-copper/10 via-transparent to-transparent mix-blend-overlay" />
        </div>
      </div>
    </motion.div>
  );
}
