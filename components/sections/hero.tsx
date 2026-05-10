"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { heroWords, scrambleChars } from "@/lib/constanst";

import { ParticlesExposion } from "../particles-explosion";
import { Button } from "../ui/button";

export function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    heroWords.forEach((word) => {
      tl.to(textRef.current, {
        duration: 2,
        scrambleText: {
          text: word,
          chars: scrambleChars,
          speed: 0.4,
        },
      });

      tl.to({}, { duration: 1.5 });
    });
  });
  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden"
    >
      <div className="container">
        <div className="z-10 flex flex-col gap-8 md:text-center lg:gap-16">
          <div>
            <h3 className="font-heading text-md mb-6 font-medium uppercase lg:text-base">
              Desenvolvedor Full-Stack
            </h3>
            <h1 className="font-heading text-5xl font-bold lg:text-6xl lg:leading-20">
              Construindo{" "}
              <span className="text-accent" ref={textRef}>
                {heroWords[0]}
              </span>{" "}
              <br />
              para a web.
            </h1>
          </div>

          <div className="mx-auto text-balance lg:max-w-2/3">
            <p className="text-muted-foreground leading-7">
              Meu nome é Maycon, sou um desenvolvedor de software especializado
              em construir interfaces modernas, APIs robustas e experiências web
              de alta performance.
            </p>
          </div>

          <div className="space-x-4">
            <Button size="xl" asChild className="font-heading">
              <Link href="#projects">
                <span className="scramble">Projetos</span> <ArrowDown />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="font-heading bg-background/10 backdrop-blur-md"
            >
              <Link href="#contact">
                <span className="scramble">Contato</span>
              </Link>
            </Button>
          </div>
        </div>

        <ParticlesExposion />
      </div>
    </section>
  );
}
