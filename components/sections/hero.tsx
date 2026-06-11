"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { fadeAnimationBase, scrambleChars } from "@/lib/constanst";

import { ParticlesExposion } from "../particles-explosion";
import { Button } from "../ui/button";

export function Hero() {
  const t = useTranslations("Hero");

  const words = t.raw("words") as string[];

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        tl.to("span.text-accent", {
          duration: 2,
          scrambleText: {
            text: word,
            chars: scrambleChars,
            speed: 0.4,
          },
        });

        tl.to({}, { duration: 1.5 });
      });

      gsap.from(".fade-in-h1", {
        ...fadeAnimationBase,
        x: 100,
        delay: 1.9,
      });

      SplitText.create(".fade-text", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            duration: 0.4,
            y: 80,
            autoAlpha: 0,
            stagger: 0.01,
            delay: 1.9,
          });
        },
      });

      gsap.from("a[href='#projects']", {
        x: "-100%",
        duration: 1,
        stagger: 0.2,
        delay: 1.9,
        ease: "circ.out",
      });

      gsap.from("a[href='#contact']", {
        y: "100%",
        duration: 1,
        stagger: 0.2,
        delay: 1.9,
        ease: "circ.out",
      });
    },
    { scope: container, dependencies: [words] },
  );

  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden"
      ref={container}
    >
      <div className="container">
        <div className="z-10 flex flex-col gap-8 md:text-center lg:gap-16">
          <div>
            <h3 className="font-heading fade-text text-md mb-6 font-medium uppercase lg:text-base">
              {t("role")}
            </h3>
            <h1 className="font-heading fade-in-h1 text-5xl font-bold lg:text-6xl lg:leading-20">
              {t.rich("title", {
                animatedText: (chunks) => (
                  <span className="text-accent">{chunks}</span>
                ),
              })}
            </h1>
          </div>

          <div className="text-balance sm:mx-auto lg:max-w-2/3">
            <p className="text-muted-foreground fade-text leading-7">
              {t("description")}
            </p>
          </div>

          <div className="space-x-4 overflow-hidden md:mx-auto md:w-fit">
            <Button
              size="xl"
              asChild
              className="font-heading fade-buttons transition-colors"
            >
              <Link href="#projects">
                <span className="scramble">{t("projectsButton")}</span>
                <ArrowDown />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="font-heading bg-background/10 fade-buttons backdrop-blur-md transition-colors"
            >
              <Link href="#contact">
                <span className="scramble">{t("contactButton")}</span>
              </Link>
            </Button>
          </div>
        </div>

        <ParticlesExposion />
      </div>
    </section>
  );
}
