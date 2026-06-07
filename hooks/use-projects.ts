import { useTranslations } from "next-intl";

import { portfolioProjects } from "@/lib/constanst";

type Project = (typeof portfolioProjects)[number];

export function useProjects() {
  const t = useTranslations("Projects");

  return portfolioProjects.map((project, index) => {
    const pj: Project = t.raw("items")[index];

    return { ...project, ...pj };
  });
}
