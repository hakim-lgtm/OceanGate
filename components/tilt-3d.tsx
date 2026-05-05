"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  max?: number;
  scale?: number;
  glare?: boolean;
};

export function Tilt3D({
  children,
  className,
  innerClassName,
  max = 10,
  scale = 1.02,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; o: number }>({
    x: 50,
    y: 50,
    o: 0,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    setTransform(
      `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
    setGlareStyle({ x: px * 100, y: py * 100, o: 0.18 });
  };

  const handleLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlareStyle((g) => ({ ...g, o: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative will-change-transform", className)}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div className={cn("relative h-full w-full", innerClassName)} style={{ transformStyle: "preserve-3d" }}>
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255,255,255,${glareStyle.o}), transparent 55%)`,
              mixBlendMode: "overlay",
              transition: "opacity 400ms ease",
            }}
          />
        )}
      </div>
    </div>
  );
}
