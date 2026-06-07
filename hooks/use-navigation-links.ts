import { useTranslations } from "next-intl";

import { navLinks } from "@/lib/constanst";

export function useNavigationLinks() {
  const t = useTranslations("Navigation");

  return navLinks.map((link, index) => ({
    ...link,
    label: (t.raw("links")[index].label as string) || link.label,
  }));
}
