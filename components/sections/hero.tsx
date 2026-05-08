"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SparklesExposion } from "../sparkles-explosion";
import { Button } from "../ui/button";

export function Hero() {
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
          </div>

          <div id="actions" className="space-x-4">
            <Button size="xl" asChild className="font-heading">
              <Link href="#project">
                <span className="scramble">Projetos</span> <ArrowRight />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="font-heading"
            >
              <Link href="#contact">
                <span className="scramble">Contato</span>
              </Link>
            </Button>
          </div>
        </div>

        <SparklesExposion />
      </div>
    </section>
  );
}
