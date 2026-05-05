"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "Inquiry from oceangate-dj.com";
    const message = formData.get("message");
    const body = `From: ${name} <${email}>%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:commercial@oceangateshipping.com?subject=${encodeURIComponent(
      String(subject)
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-ink py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-copper" />
            <p className="text-xs uppercase tracking-[0.3em] text-copper">
              Start a conversation
            </p>
          </div>
          <h2 className="font-display mt-8 max-w-5xl text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl xl:text-[96px]">
            Let&apos;s move
            <br />
            <span className="italic text-copper">what matters.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Subject" name="subject" placeholder="Port call · Cargo · Bunkering…" />
            <Field label="Message" name="message" textarea required />

            <button
              type="submit"
              className="group relative mt-4 inline-flex items-center gap-4 overflow-hidden border border-copper/40 px-8 py-4 text-xs uppercase tracking-[0.22em] text-paper transition-all hover:border-copper"
            >
              <span className="absolute inset-0 -translate-y-full bg-copper transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative z-10">
                {sent ? "Opening email client…" : "Send inquiry"}
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="relative z-10 h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Office</p>
              <p className="font-display mt-4 text-3xl leading-tight text-paper">
                Héron, Djibouti
                <br />
                <span className="text-paper/60">Horizon Building</span>
              </p>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Direct lines</p>
              <div className="mt-4 space-y-2">
                <a href="tel:+25377814853" className="font-display block text-2xl text-paper hover:text-copper transition-colors">
                  +253 77 81 48 53
                </a>
                <a href="tel:+25377327924" className="font-display block text-2xl text-paper hover:text-copper transition-colors">
                  +253 77 32 79 24
                </a>
              </div>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Email</p>
              <div className="mt-4 space-y-2 text-base">
                <a
                  href="mailto:info@oceangateshipping.com"
                  className="block text-paper hover:text-copper transition-colors"
                >
                  info@oceangateshipping.com
                </a>
                <a
                  href="mailto:commercial@oceangateshipping.com"
                  className="block text-paper hover:text-copper transition-colors"
                >
                  commercial@oceangateshipping.com
                </a>
              </div>
            </div>

            <div className="h-px bg-line" />

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Operating hours</p>
              <p className="font-display mt-4 text-2xl text-paper">
                24 / 7 · 365
              </p>
              <p className="mt-1 text-sm text-fog">
                FR · EN · Somali · Arabic · Afar · 中文
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block border-b border-line pb-4 transition-colors focus-within:border-copper">
      <span className="block text-xs uppercase tracking-[0.22em] text-muted">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className="mt-3 w-full resize-none bg-transparent text-base text-paper outline-none placeholder:text-muted"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-3 w-full bg-transparent text-base text-paper outline-none placeholder:text-muted"
        />
      )}
    </label>
  );
}
