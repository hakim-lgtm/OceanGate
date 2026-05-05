type LogoProps = { className?: string };

/* ─────────────────────────────────────────────────────────────
   A · Monogram OG — Medallion luxe
   ───────────────────────────────────────────────────────────── */
export function LogoA({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 280 110" fill="none" className={className} aria-label="Oceangate">
      <g stroke="currentColor" fill="none" strokeWidth="1.1">
        <circle cx="42" cy="42" r="34" />
        <circle cx="42" cy="42" r="29" opacity="0.45" />
      </g>
      {/* Interlocked O + G */}
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="36" cy="42" r="13" />
        <path d="M55 42a13 13 0 1 1-13-13" />
        <path d="M55 42h-7" />
      </g>
      <text
        x="92"
        y="46"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        letterSpacing="0.18em"
        fill="currentColor"
        fontWeight="400"
      >
        OCEANGATE
      </text>
      <line x1="92" y1="58" x2="262" y2="58" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text
        x="92"
        y="74"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8.5"
        letterSpacing="0.42em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   B · Compass Rose
   ───────────────────────────────────────────────────────────── */
export function LogoB({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 280 110" fill="none" className={className} aria-label="Oceangate">
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <circle cx="42" cy="42" r="32" />
        <circle cx="42" cy="42" r="22" opacity="0.4" />
      </g>
      {/* Compass star */}
      <g fill="currentColor">
        <path d="M42 8 L46 42 L42 76 L38 42 Z" />
        <path d="M8 42 L42 38 L76 42 L42 46 Z" opacity="0.55" />
      </g>
      <g fill="currentColor" opacity="0.35">
        <path d="M18 18 L42 40 L66 18 L44 42 L66 66 L42 44 L18 66 L40 42 Z" />
      </g>
      <circle cx="42" cy="42" r="2" fill="currentColor" />

      <text
        x="92"
        y="46"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        letterSpacing="0.18em"
        fill="currentColor"
      >
        OCEANGATE
      </text>
      <text
        x="92"
        y="68"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8.5"
        letterSpacing="0.42em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   C · Wave Gate — vague qui passe sous une arche
   ───────────────────────────────────────────────────────────── */
export function LogoC({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 280 110" fill="none" className={className} aria-label="Oceangate">
      <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
        {/* Gate / arch */}
        <path d="M12 70 L12 38 Q42 12 72 38 L72 70" />
        {/* Wave */}
        <path d="M8 60 Q22 50 36 60 T64 60 T76 60" strokeWidth="1.4" />
        <path d="M8 68 Q22 58 36 68 T64 68 T76 68" strokeWidth="1.1" opacity="0.55" />
      </g>
      <text
        x="92"
        y="46"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        letterSpacing="0.18em"
        fill="currentColor"
      >
        OCEANGATE
      </text>
      <line x1="92" y1="58" x2="262" y2="58" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <text
        x="92"
        y="74"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8.5"
        letterSpacing="0.42em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   D · Wordmark serif premium — pas de mark
   ───────────────────────────────────────────────────────────── */
export function LogoD({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 320 110" fill="none" className={className} aria-label="Oceangate">
      <text
        x="160"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="34"
        letterSpacing="0.14em"
        fill="currentColor"
        fontWeight="400"
      >
        OCEANGATE
      </text>
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
        <line x1="40" y1="68" x2="130" y2="68" />
        <line x1="190" y1="68" x2="280" y2="68" />
      </g>
      <circle cx="160" cy="68" r="1.4" fill="currentColor" opacity="0.7" />
      <text
        x="160"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="9"
        letterSpacing="0.5em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   E · Anchor monoline
   ───────────────────────────────────────────────────────────── */
export function LogoE({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 280 110" fill="none" className={className} aria-label="Oceangate">
      <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Anchor */}
        <circle cx="42" cy="20" r="5" />
        <line x1="42" y1="25" x2="42" y2="68" />
        <line x1="32" y1="36" x2="52" y2="36" />
        <path d="M22 56 Q22 70 42 70 Q62 70 62 56" />
        <line x1="20" y1="58" x2="24" y2="54" />
        <line x1="64" y1="58" x2="60" y2="54" />
      </g>
      <text
        x="92"
        y="46"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        letterSpacing="0.18em"
        fill="currentColor"
      >
        OCEANGATE
      </text>
      <text
        x="92"
        y="68"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8.5"
        letterSpacing="0.42em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   F · OG Diamond — digital, géométrique
   ───────────────────────────────────────────────────────────── */
export function LogoF({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 280 110" fill="none" className={className} aria-label="Oceangate">
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M42 8 L76 42 L42 76 L8 42 Z" />
        <path d="M42 18 L66 42 L42 66 L18 42 Z" opacity="0.35" />
      </g>
      <text
        x="42"
        y="48"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="20"
        letterSpacing="0.04em"
        fill="currentColor"
        fontWeight="500"
      >
        OG
      </text>

      <text
        x="100"
        y="46"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="22"
        letterSpacing="0.18em"
        fill="currentColor"
      >
        OCEANGATE
      </text>
      <text
        x="100"
        y="68"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8.5"
        letterSpacing="0.42em"
        fill="currentColor"
        opacity="0.7"
      >
        INTERNATIONAL SHIPPING
      </text>
    </svg>
  );
}
