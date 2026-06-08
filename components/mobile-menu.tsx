import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { useNavigationLinks } from "@/hooks/use-navigation-links";

import { LocaleSwitcher } from "./locale-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function MobileMenu() {
  const t = useTranslations("Navigation");
  const links = useNavigationLinks();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="bg-background">
        <SheetHeader>
          <SheetTitle className="">{t("mobileMenu.title")}</SheetTitle>
          <SheetDescription>{t("mobileMenu.description")}</SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col items-start gap-8 pt-8">
          {links.map((nv) => (
            <SheetClose asChild key={nv.href}>
              <Button asChild variant="link">
                <Link href={nv.href}>
                  {nv.label} <ArrowRight />
                </Link>
              </Button>
            </SheetClose>
          ))}
          <div className="mt-auto mb-8 flex w-full items-center justify-evenly">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
