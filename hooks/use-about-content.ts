import { useTranslations } from "next-intl";

import { aboutFocus, aboutHighlights } from "@/lib/constanst";

type FocusItem = (typeof aboutFocus)[number];

export function useAbountContent() {
  const t = useTranslations("About");

  const highlights = aboutHighlights.map((hl, index) => ({
    ...hl,
    label: (t.raw("highlights")[index].label as string) || hl.label,
  }));

  const focus = aboutFocus.map((f, index) => {
    const rawFocus: FocusItem = t.raw("focus")[index];

    return {
      ...f,
      title: rawFocus?.title || f.title,
      description: rawFocus?.description || f.description,
    };
  });

  return { highlights, focus };
}
