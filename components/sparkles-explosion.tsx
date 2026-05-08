"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Braces, Plus } from "lucide-react";
import { useRef } from "react";

export function SparklesExposion() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".particle");

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      items.forEach((item) => {
        const angle = gsap.utils.random(0, Math.PI * 2);
        const distance = gsap.utils.random(300, 900);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const duration = gsap.utils.random(4, 16);
        const scale = gsap.utils.random(0.5, 3);

        gsap.set(item, {
          x: centerX,
          y: centerY,
          opacity: gsap.utils.random(0.2, 0.8),
          scale: 0,
          force3D: true,
        });

        const tl = gsap.timeline({
          repeat: -1,
          // repeatRefresh: true,
          delay: gsap.utils.random(0, 8),
        });

        tl.to(item, {
          x: centerX + x,
          y: centerY + y,
          rotate: `+=${gsap.utils.random(180, 600)}`,
          scale,
          duration,
          ease: "power2.out",
        });

        tl.to(
          item,
          {
            opacity: 0,
            duration: duration * 0.7,
            ease: "power1.out",
          },
          duration * 0.3,
        );
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="pointer-events-none absolute inset-0 overflow-hidden mask-[radial-gradient(circle_at_center,transparent_0%,transparent_18%,black_50%)]"
    >
      {Array.from({ length: 45 }).map((_, index) => (
        <div key={index} className="particle absolute z-0">
          <Plus size={32} strokeWidth={0.4} />
        </div>
      ))}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="particle absolute z-0">
          <Braces size={32} strokeWidth={0.4} />
        </div>
      ))}
    </div>
  );
}
