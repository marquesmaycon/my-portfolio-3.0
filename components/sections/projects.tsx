import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const portfolioProjects = [
  {
    tag: "Inteligência Artificial",
    year: "2025",
    title: "Ask Room + Gemini AI",
    topics: [
      "Gemini AI",
      "Next.js",
      "TanStack Query",
      "TanStack Form",
      "Prisma ORM",
      "Hono.js",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    description:
      "Projeto full-stack que permite a criação de salas de conhecimento, onde usuários podem adicionar conteúdos em texto ou áudio e, a partir desse contexto, outras pessoas fazem perguntas que são respondidas por uma IA exclusivamente com base no material fornecido.",
    repository: "https://github.com/marquesmaycon/ask-room",
    demo: "https://ask-room.mklly.com.br/",
    image: "/ask-room.png",
    wip: false,
  },
  {
    tag: "TurboRepo + AdonisJS + TanStack Start",
    year: "2026",
    title: "Stock Forge",
    topics: [
      "AdonisJS 7",
      "TanStack Start",
      "TanStack Table",
      "TanStack Form",
      "TanStack Query",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    description:
      "Projeto monorepo para gerenciamento de produtos e matérias-primas. Forjar um produto consome insumos, atualizando o estoque e interferindo em outras produções.",
    repository: "https://github.com/marquesmaycon/stock-forge",
    demo: "https://stock-forge.mklly.com.br/",
    image: "/stock-forge.png",
  },
  {
    tag: "Fluxo de Checkout",
    year: "2025",
    title: "Marketplace Next.js",
    topics: [
      "React",
      "Next.js",
      "TanStack Query",
      "TanStack Form",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    description:
      "Aplicação moderna desenvolvida para demonstrar um fluxo completo de checkout com autenticação, carrinho e múltiplos métodos de pagamento.",
    demo: "https://marketplace-nextjs.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/marketplace-nextjs",
    image: "/marketplace-nextjs.png",
  },
  {
    tag: "Mono Repo",
    year: "2025",
    title: "Next.js Saas RBAC",
    topics: [
      "Next.js",
      "Turborepo",
      "PostgreSQL",
      "Prisma ORM",
      "Fastify",
      "Node",
      "Shadcn/ui",
      "Tailwind CSS",
      "TypeScript",
    ],
    description:
      "SaaS multi-tenant com autenticação robusta e sistema de autorização baseado em RBAC (Role-Based Access Control). Desenvolvido com as melhores práticas e arquitetura monorepo para máxima escalabilidade e reutilização de código.",
    demo: null,
    repository: "https://github.com/marquesmaycon/next-saas-rbac",
    image: "/next-saas-rbac.png",
  },
  {
    tag: "Full Stack",
    year: "2025",
    title: "Habit Tracker",
    topics: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Radix UI",
      "Dayjs",
      "TypeScript",
    ],
    description:
      "Um sistema de rastreamento de hábitos. Adicione hábitos, configure o dia da semana, acompanhe seu progresso, dados persistidos no banco de dados.",
    demo: "https://habit-tracker.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/habit-tracker",
    image: "/habit-tracker.png",
  },
  {
    tag: "API externas",
    year: "2025",
    title: "Dummy Users",
    topics: ["React", "TanStack Query", "Ant Design", "TypeScript"],
    description:
      "Sistema de gerenciamento de usuários que demonstra implementação de autenticação, CRUD de usuários e gerenciamento de estado e cache com TanStack Query.",
    demo: "https://dummy-users.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/dummy-users",
    image: "/dummy-users.png",
  },
] as const;

export function Projects() {
  return (
    <section id="projects">
      <div className="container py-8 lg:py-20">
        <div>
          <h2 className="font-heading text-center text-3xl md:text-5xl">
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
