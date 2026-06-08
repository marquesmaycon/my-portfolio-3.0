"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLocaleCookie } from "@/i18n/actions";
import { type Locale, locales } from "@/i18n/locales";

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const locale = useLocale() as Locale;
  const t = useTranslations("LocaleSwitcher");

  function handleChangeLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;

    startTransition(() => {
      setLocaleCookie(nextLocale).then(() => {
        router.refresh();
      });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          disabled={isPending}
        >
          <Languages />
          <span className="sr-only">{t("toggleLabel")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((option) => (
          <DropdownMenuItem
            key={option}
            disabled={isPending || option === locale}
            onClick={() => handleChangeLocale(option)}
          >
            {t("locale", { locale: option })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
