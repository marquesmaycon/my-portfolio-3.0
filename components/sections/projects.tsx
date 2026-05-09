import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

import { portfolioProjects } from "@/lib/constanst";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Projects() {
  return (
    <section id="projects">
      <div className="container py-8 lg:py-10">
        <h6 className="mb-6 flex items-center justify-center">
          <span>------------</span>
          <X />
          <span>------------</span>
        </h6>
        <div>
          <h2 className="font-heading mb-4 text-center text-3xl md:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="text-center text-balance md:text-lg lg:text-xl">
            Esses são meus projetos mais relevantes e completos
          </p>
        </div>
        <div className="mt-10 flex flex-col md:mt-20">
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
                image,
              },
              index,
            ) => (
              <div
                key={title}
                className="bg-background sticky overflow-hidden border px-4 pt-4 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
                style={{ top: `${64 + index * 20}px` }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="relative space-y-4 md:space-y-8 lg:pb-16">
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

                    <div className="space-x-4">
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
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={800}
                      className="mt-8 -mb-4 w-200 border object-cover object-top-left transition hover:grayscale-0 md:mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-162.5 lg:max-w-none lg:grayscale"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
