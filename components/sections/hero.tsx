"use client";

import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  Hash,
  Plus,
  Terminal,
  X,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

import gsap from "gsap";
import { useRef } from "react";

import { Button } from "../ui/button";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".particle");

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      items.forEach((item) => {
        gsap.set(item, {
          x: centerX,
          y: centerY,
          opacity: 0,
          scale: 0,
          rotate: gsap.utils.random(-180, 180),
          force3D: true,
        });

        const angle = gsap.utils.random(0, Math.PI * 2);
        const distance = gsap.utils.random(200, 800);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const duration = gsap.utils.random(5, 10);
        const scale = gsap.utils.random(1, 3);

        const tl = gsap.timeline({
          repeat: -1,
          delay: gsap.utils.random(0, 5),
          repeatDelay: gsap.utils.random(0, 2),
        });

        tl.to(item, {
          opacity: gsap.utils.random(0.2, 0.8),
          scale,
          duration: 0.2,
          ease: "power2.out",
        });

        tl.to(
          item,
          {
            x: centerX + x,
            y: centerY + y,
            opacity: 0.75,
            rotate: `+=${gsap.utils.random(180, 600)}`,
            duration,
            ease: "expo.out",
          },
          0,
        );

        tl.to(
          item,
          {
            opacity: 0,
            duration: duration * 0.7,
            ease: "power1.out",
          },
          duration * 0.3,
        );

        tl.set(item, {
          x: centerX,
          y: centerY,
          opacity: 0,
          scale: 0,
        });
      });
    },
    { scope: container },
  );

  return (
    <section className="relative flex h-screen items-center overflow-hidden border-b border-b-neutral-200">
      <div className="container" ref={container}>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-medium">Full Stack Developer</h3>
          <h1 className="font-heading text-6xl leading-20 font-semibold">
            Building amazing <br /> Experiences
          </h1>

          <div>
            <p className="text-muted-foreground leading-7">
              Sou um desenvolvedor full-stack apaixonado por criar aplicações
              web
            </p>

            <p className="text-muted-foreground">
              Disponível para novos projetos
            </p>
          </div>

          <div className="space-x-4">
            <Button size="xl">
              Projetos <ArrowRight />
            </Button>
            <Button variant="outline" size="xl">
              Contato
            </Button>
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="particle absolute top-0 left-0">
            <Plus size={32} strokeWidth={0.3} />
          </div>
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="particle absolute top-0 left-0">
            <Code2 size={32} strokeWidth={0.3} />
          </div>
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="particle absolute top-0 left-0">
            <Braces size={32} strokeWidth={0.3} />
          </div>
        ))}
      </div>
    </section>
  );
}
