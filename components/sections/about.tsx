import { Cloud, GraduationCap, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { useAbountContent } from "@/hooks/use-about-content";

import { Badge } from "../ui/badge";

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
  const t = useTranslations("About");

  const { highlights, focus } = useAbountContent();

  return (
    <section id="about" className="overflow-hidden py-12 md:py-20">
      <div className="container">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-16">
          <div className="fade-left flex flex-col justify-between gap-8 border-y py-8 md:border-x md:p-8">
            <div>
              <span className="text-muted-foreground inline-flex items-center gap-2 text-sm uppercase">
                <Sparkles className="text-accent size-4" />
                {t("eyebrow")}
              </span>

              <h2 className="font-heading mt-5 text-3xl font-bold text-pretty md:text-5xl">
                {t("title")}
              </h2>
            </div>

            <p className="text-muted-foreground leading-7 text-pretty">
              {t("description")}
            </p>

            <div className="stagger-fade grid overflow-hidden border sm:grid-cols-3 [&>.stagger-item+*]:border-t sm:[&>.stagger-item+*]:border-t-0 sm:[&>.stagger-item+*]:border-l">
              {highlights.map(({ value, label }) => (
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
            <div className="fade-right stagger-fade grid overflow-hidden border md:grid-cols-3 [&>.stagger-item+*]:border-t md:[&>.stagger-item+*]:border-t-0 md:[&>.stagger-item+*]:border-l">
              {focus.map(({ title, description, icon: Icon }) => (
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
                    {t("stackTitle")}
                  </h3>
                </div>
                <p className="text-muted-foreground mt-2 leading-7">
                  {t("stackDescription")}
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
              {t("education")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
