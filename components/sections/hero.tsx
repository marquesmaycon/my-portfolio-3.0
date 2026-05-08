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
import Link from "next/link";
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
        // const angle = 90;
        const distance = gsap.utils.random(200, 1200);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const duration = gsap.utils.random(5, 10);
        const scale = gsap.utils.random(1, 3);

        const tl = gsap.timeline({
          repeat: -1,
          delay: gsap.utils.random(0, 5),
          // repeatDelay: gsap.utils.random(0, 2),
        });

        tl.to(item, {
          opacity: gsap.utils.random(0.2, 0.8),
          scale,
          // duration: 0.2,
          ease: "power2.out",
        });

        tl.to(
          item,
          {
            x: centerX + x,
            y: centerY + y,
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
    { dependencies: [], scope: container },
  );

  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden"
    >
      <div className="container">
        <div className="z-10 flex flex-col gap-16 md:text-center lg:gap-8">
          <div>
            <h3 className="font-heading text-md mb-6 font-medium uppercase lg:text-2xl">
              Full-Stack Developer
            </h3>
            <h1 className="font-heading text-5xl font-bold lg:text-6xl lg:leading-20">
              Building <span className="text-accent">amazing</span> <br />{" "}
              Experiences
            </h1>
          </div>

          <div>
            <p className="text-muted-foreground leading-7">
              Meu nome é Maycon, sou um desenvolvedor de software focado em
              experiências fluidas e impactantes.
            </p>

            {/* <span className="text-muted-foreground">
              Disponível para novos projetos
            </span> */}
          </div>

          <div className="space-x-4">
            <Button size="xl" asChild>
              <Link href="#project">
                Projetos <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" size="xl">
              <Link href="#contact">Contato</Link>
            </Button>
          </div>
        </div>

        <div
          ref={container}
          className="pointer-events-none absolute inset-0 overflow-hidden mask-[radial-gradient(circle_at_center,transparent_0%,transparent_18%,black_50%)]"
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <div key={index} className="particle absolute top-0 left-0 z-0">
              <Plus size={32} strokeWidth={0.3} />
            </div>
          ))}
          {Array.from({ length: 25 }).map((_, index) => (
            <div key={index} className="particle absolute top-0 left-0 z-0">
              <Braces size={32} strokeWidth={0.3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
