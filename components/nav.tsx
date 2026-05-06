"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#mission", label: "Mission" },
  { href: "/#djibouti", label: "Djibouti" },
  { href: "/#services", label: "Services" },
  { href: "/#heritage", label: "Heritage" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/75 backdrop-blur-xl border-b border-line/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="text-paper hover:opacity-80 transition-opacity"
        >
          <Logo className="h-[120px] w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-[0.14em] uppercase text-fog hover:text-paper transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button
            className="text-[13px] tracking-[0.14em] uppercase text-fog hover:text-paper transition-colors"
            aria-label="Language"
          >
            EN / FR
          </button>
          <Link
            href="/#contact"
            className="group relative overflow-hidden rounded-full border border-copper/40 px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] text-paper transition-all hover:border-copper"
          >
            <span className="relative z-10">Get a quote</span>
            <span className="absolute inset-0 -translate-y-full bg-copper transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line/60 bg-ink/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.14em] text-paper"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block self-start rounded-full border border-copper px-5 py-2.5 text-xs uppercase tracking-[0.18em]"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
