import Link from "next/link";

import { MobileMenu } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

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

export function Header() {
  return (
    <header className="bg-background/5 fixed inset-x-0 z-50 flex h-12 backdrop-blur-sm lg:h-16">
      <div className="container flex flex-1 items-center">
        <div className="flex h-full flex-1 items-center font-medium">
          <span className="text-accent">maycon</span>_silva();
        </div>

        <div className="hidden h-full flex-1 items-center justify-center lg:flex">
          {navLinks.map((nv) => (
            <Button key={nv.href} variant="link" className="text-base" asChild>
              <Link href={nv.href}>{nv.label}</Link>
            </Button>
          ))}
        </div>

        <div className="hidden h-full flex-1 items-center justify-end lg:flex">
          <ThemeSwitcher />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
