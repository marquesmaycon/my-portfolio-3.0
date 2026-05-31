import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef } from "react";

import { portfolioProjects } from "@/lib/constanst";
import { gsap } from "@/lib/gsap";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Projects() {
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    let lastScroll = window.scrollY;

    const rotate = (direction: "up" | "down") => {
      gsap.to(iconRef.current, {
        rotate: direction === "down" ? "+=60" : "-=60",
        duration: 0.5,
        ease: "power1.out",
      });
    };

    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        rotate("down");
      } else if (currentScroll < lastScroll) {
        rotate("up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-8">
      <div className="container lg:py-10">
        <div className="fade-up mb-6 flex items-center justify-center font-light">
          <PortfolioSeparator />
          <Plus
            ref={iconRef}
            strokeWidth={0.4}
            className="mx-1 size-10 shrink-0 md:size-14"
          />
          <PortfolioSeparator />
        </div>
        <div>
          <h2 className="font-heading fade-up mb-4 text-center text-3xl font-bold md:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground fade-up text-center text-balance md:text-lg">
            Esses são meus projetos mais relevantes e completos
          </p>
        </div>
        <ul className="mt-10 flex flex-col gap-8 md:mt-20">
          {portfolioProjects.map(
            (
              {
                title,
                tag,
                year,
                topics,
                demo,
                description,
                repository,
                icon: Icon,
              },
              index,
            ) => (
              <li
                key={title}
                className="bg-background group sticky overflow-hidden border px-4 py-4 md:px-10 md:py-12 lg:px-20 lg:py-16"
                style={{ top: `${64 + index * 20}px` }}
              >
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="relative space-y-4 md:space-y-8 lg:pb-16 lg:group-even:order-2">
                    <div>
                      <div className="inline-flex w-full items-center justify-between gap-2 text-xs tracking-widest uppercase md:justify-start md:text-sm">
                        <span>{tag}</span>
                        <span className="text-accent text-2xl">&bull;</span>
                        <span>{year}</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold uppercase md:mt-5 md:text-4xl">
                        {title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <ul className="flex max-h-14 flex-wrap items-center gap-x-2 gap-y-1 overflow-hidden">
                        {topics.map((t) => (
                          <li key={t}>
                            <Badge
                              variant="secondary"
                              className="bg-accent/16 text-xs"
                            >
                              {t.trim()}
                            </Badge>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm md:text-base">{description}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                      <Button asChild size="xl">
                        <a href={repository} target="_blank">
                          <span className="scramble">Ver Repositório</span>
                          <ArrowUpRight />
                        </a>
                      </Button>

                      {demo && (
                        <Button variant="outline" size="xl" asChild>
                          <a href={demo} target="_blank">
                            <span className="scramble">Ver Demo</span>
                            <ArrowUpRight />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="bg-accent/8 group-hover:bg-accent/32 flex items-center justify-center border p-4 transition-colors duration-800">
                    <Icon
                      className="group-hover:text-foreground size-1/2 text-indigo-300 transition-all duration-800 group-hover:scale-125"
                      strokeWidth={0.4}
                    />
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

const PortfolioSeparator = () => (
  <div className="flex items-center gap-px">
    {Array.from({ length: 8 }).map((_, i) => (
      <span key={i}>-</span>
    ))}
  </div>
);