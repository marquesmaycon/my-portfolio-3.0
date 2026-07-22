import {
  Anvil,
  Beer,
  BookImage,
  Brain,
  BrainCircuit,
  Code2,
  Microwave,
  Rocket,
  ShoppingBag,
  UserRoundKey,
} from "lucide-react";

export const scrambleChars = "01#&%+";

export const fadeAnimationBase = {
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
};

export const navLinks = [
  {
    label: "Início",
    href: "#home",
  },
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export const heroWords = [
  "soluções",
  "experiências",
  "produtos",
  "softwares",
  "jornadas",
  "ideias",
  "conexões",
];

export const contacts = [
  {
    title: "LinkedIn",
    subtitle: "Maycon Henrique da Silva",
    link: "https://www.linkedin.com/in/mayconhenrique/",
  },
  {
    title: "GitHub",
    subtitle: "@marquesmaycon",
    link: "https://github.com/marquesmaycon",
  },
  {
    title: "E-mail",
    subtitle: "mayconmarquesh@gmail.com",
    link: "mailto:mayconmarquesh@gmail.com",
  },
  {
    title: "WhatsApp",
    subtitle: "+55 44 99117-3753",
    link: "https://web.whatsapp.com/send?phone=5544991173753&text=Oi%20Maycon%2C%20vim%20do%20seu%20portf%C3%B3lio",
  },
];

export const portfolioProjects = [
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

    icon: Brain,
    image: "/ask-room.png",
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

    icon: Anvil,
    image: "/stock-forge.png",
  },
  {
    tag: "Controle Fermentativo",
    year: "2026",
    title: "Brew Monitor",
    topics: [
      "C#",
      ".NET 10",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "React 19",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "TanStack Form",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
    ],
    description:
      "Aplicação full-stack para registrar e acompanhar dados de fermentação cervejeira, com CRUD de cervejas, tanques, parâmetros e registros fermentativos, além de dashboard, histórico por lote e classificação automática dos apontamentos.",
    repository: "https://github.com/marquesmaycon/brew-monitor",
    demo: "https://brew-monitor.mklly.com.br/",

    icon: Beer,
    image: "/dummy-users.png",
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

    icon: ShoppingBag,
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

    icon: UserRoundKey,
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

    icon: BookImage,
    image: "/habit-tracker.png",
  },
  {
    tag: "Simulador",
    year: "2025",
    title: "Microondas",
    topics: ["React", "TailwindCSS", "Vite", "TypeScript"],
    description:
      "Um simulador interativo de microondas com sons e funcionalidades fieis do eletrodoméstico.",
    demo: "https://microondas.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/microwave",
    icon: Microwave,
    image: "/dummy-users.png",
  },
] as const;

export const aboutHighlights = [
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

export const aboutFocus = [
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
