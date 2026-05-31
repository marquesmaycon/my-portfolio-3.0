"use client";

import { useGSAP } from "@gsap/react";

import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
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

    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "circle",
        stagger: 0.1,
      });
    });

    gsap.utils.toArray<HTMLElement>(".fade-left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: "circle",
        stagger: 0.5,
      });
    });

    gsap.utils.toArray<HTMLElement>(".fade-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        opacity: 0,
        x: 40,
        duration: 0.6,
        ease: "circle",
        stagger: 0.5,
      });
    });

    gsap.utils.toArray<HTMLElement>(".stagger-fade").forEach((el) => {
      const items = el.querySelectorAll<HTMLElement>(".stagger-item");

      gsap.from(items, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        autoAlpha: 0,
        x: 18,
        // scale: 0.96,
        duration: 0.5,
        ease: "circle",
        stagger: 0.08,
        delay: 0.2,
        clearProps: "opacity,visibility,transform",
      });
    });
  });

  return (
    <div className="divide divide-y">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Tape />
      <Contact />
      <Footer />
    </div>
  );
}
