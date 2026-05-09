"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, X } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const items = [
  "Performático",
  "Acessível",
  "Seguro",
  "Interativo",
  "Escalável",
  "Intuitivo",
  "Modular",
  "Personalizável",
  "Moderno",
  "Rápido",
  "Responsivo",
  "Eficiente",
  "Otimizado",
  "Robusto",
  "Flexível",
];

export function Tape() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = container.current;

      if (!track) return;

      const width = track.scrollWidth / 2;

      const tween = gsap.to(track, {
        x: -width,
        duration: 35,
        ease: "none",
        repeat: -1,
      });

      track.addEventListener("mouseenter", () => {
        gsap.to(tween, {
          timeScale: 0.3,
        });
      });

      track.addEventListener("mouseleave", () => {
        gsap.to(tween, {
          timeScale: 1,
        });
      });
    },
    { scope: container },
  );

  return (
    <section className="bg-accent/16 overflow-hidden">
      <div className="bg-background my-4">
        <div className="container">
          <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div ref={container} className="divide flex flex-none gap-12 pr-12">
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="flex h-20 items-center gap-12 text-lg tracking-widest whitespace-nowrap uppercase"
                >
                  <span>{item}</span>
                  <Plus className="text-muted-foreground my-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
