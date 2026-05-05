export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Oceangate — International Shipping"
    >
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
