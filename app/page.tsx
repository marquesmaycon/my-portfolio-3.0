"use client";

import { useGSAP } from "@gsap/react";

import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Tape } from "@/components/sections/tape";
import { scrambleChars } from "@/lib/constanst";
import { gsap } from "@/lib/gsap";

export default function Home() {
  useGSAP(() => {
    const buttons = gsap.utils.toArray<HTMLButtonElement>(
      '[data-slot="button"]',
    );

    buttons.forEach((button) => {
      const text = button.querySelector(".scramble");

      if (!text) return;

      const original = text.textContent;

      const enter = () => {
        text.textContent = original;

        gsap.to(text, {
          duration: 0.6,
          scrambleText: {
            text: original,
            chars: scrambleChars,
            speed: 0.4,
          },
        });
      };

      button.addEventListener("mouseenter", enter);
    });
  });

  return (
    <div className="divide divide-y">
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Contact />
      <Footer />
    </div>
  );
}
