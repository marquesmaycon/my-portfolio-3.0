import {
  BrainCircuit,
  Cloud,
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

import { Badge } from "../ui/badge";

const aboutHighlights = [
  {
    value: "2022",
    label: "comecei a estudar código e desenvolvimento web",
  },
  {
    value: "2023",
    label: "iniciei minha atuação profissional como Full Stack",
  },
  {
    value: "2025",
    label: "me formei em Análise e Desenvolvimento de Sistemas",
  },
] as const;

const aboutFocus = [
  {
    title: "Produto de ponta a ponta",
    description:
      "Gosto de transformar requisitos em jornadas claras, conectando regra de negócio, interface e dados com atenção aos detalhes.",
    icon: Rocket,
  },
  {
    title: "Arquitetura limpa",
    description:
      "Priorizo performance, escalabilidade e código organizado para que o produto cresça sem virar um peso para evoluir.",
    icon: Code2,
  },
  {
    title: "Fluxo inteligente",
    description:
      "Trato IA como uma parceira de trabalho para pesquisar, prototipar e revisar melhor, mantendo decisão técnica no centro.",
    icon: BrainCircuit,
  },
] as const;

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Prisma",
  "AdonisJS",
] as const;

export function About() {
  return (
    <section id="about" className="overflow-hidden py-12 md:py-20">
      <div className="container">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-16">
          <div className="fade-left flex flex-col justify-between gap-8 border-y py-8 md:border-x md:p-8">
            <div>
              <span className="text-muted-foreground inline-flex items-center gap-2 text-sm uppercase">
                <Sparkles className="text-accent size-4" />
                Sobre mim
              </span>

              <h2 className="font-heading mt-5 text-3xl font-bold text-pretty md:text-5xl">
                Código, produto e clareza caminhando juntos.
              </h2>
            </div>

            <p className="text-muted-foreground leading-7 text-pretty">
              Minha trajetória com tecnologia começou pela curiosidade de
              entender como uma ideia vira software de verdade. Desde então,
              venho construindo repertório entre estudo, faculdade e prática
              profissional para criar soluções úteis, bem pensadas e fáceis de
              evoluir.
            </p>

            <div className="bg-border stagger-fade grid gap-px overflow-hidden border sm:grid-cols-3">
              {aboutHighlights.map(({ value, label }) => (
                <div key={value} className="stagger-item bg-background p-4">
                  <strong className="font-heading text-accent text-2xl">
                    {value}
                  </strong>
                  <p className="text-muted-foreground mt-2 text-sm leading-5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="fade-right bg-border stagger-fade grid gap-px overflow-hidden border md:grid-cols-3">
              {aboutFocus.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="stagger-item bg-background p-5 md:p-6"
                >
                  <Icon className="text-accent mb-8 size-8" strokeWidth={1.2} />
                  <h3 className="font-heading text-lg font-bold">{title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="fade-right border-y py-6 md:border-x md:p-6">
              <div className="flex flex-col items-start gap-3">
                <div>
                  <h3 className="font-heading flex items-center gap-2 text-xl font-bold">
                    <Cloud className="text-accent mt-1" />
                    Stack principal
                  </h3>
                </div>
                <p className="text-muted-foreground mt-2 leading-7">
                  Trabalho principalmente com React, Next.js, TypeScript,
                  Node.js, AdonisJS, infraestrutura em nuvem com AWS e bases
                  relacionais, equilibrando experiência de uso, performance e
                  manutenção.
                </p>
              </div>

              <div className="stagger-fade mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="stagger-item bg-accent/16 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="fade-right text-muted-foreground flex items-center gap-3 text-sm">
              <GraduationCap className="text-accent size-5 shrink-0" />
              Formado em Análise e Desenvolvimento de Sistemas (2025)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
