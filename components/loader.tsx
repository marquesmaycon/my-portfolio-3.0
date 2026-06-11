"use client";

import { useGSAP } from "@gsap/react";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let currentVal = 0;
    let timeoutId: NodeJS.Timeout;

    function updateCounter() {
      if (currentVal >= 100) return;

      currentVal += Math.floor(Math.random() * 10) + 1;

      if (currentVal > 100) {
        currentVal = 100;
      }

      setCounter(currentVal);

      const delay = Math.floor(Math.random() * 50) + 20;
      timeoutId = setTimeout(updateCounter, delay);
    }

    updateCounter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#counter", {
      duration: 1,
      delay: 0.8,
      opacity: 0,
    });
    gsap.to(".bars", {
      duration: 1.5,
      delay: 0.8,
      height: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.4,
      },
    });
  });

  return (
    <div className="pointer-events-none fixed z-50 flex h-screen w-screen">
      <div
        id="counter"
        className="text-primary absolute top-1/2 left-1/2 z-30 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-4xl font-bold"
      >
        {counter}
      </div>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bars bg-background flex h-screen w-1/2 flex-col items-center justify-around overflow-hidden border-r md:w-1/4 lg:w-1/8",
            i >= 2 && "hidden",
            i >= 2 && i < 4 && "md:flex",
            i >= 4 && "lg:flex",
          )}
        >
          <Plus size={32} strokeWidth={0.8} />
          <Plus size={32} strokeWidth={0.4} />
          <Plus size={32} strokeWidth={0.2} />
        </div>
      ))}
    </div>
  );
}
