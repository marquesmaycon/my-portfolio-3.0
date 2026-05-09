import Link from "next/link";

import { navLinks } from "@/lib/constans";

import { MobileMenu } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-background/10 fixed inset-x-0 z-50 flex h-12 backdrop-blur-sm md:h-14 lg:h-16">
      <div className="container flex flex-1 items-center">
        <div className="flex-1 font-medium">
          <span className="text-accent">function</span>
          {"  "} maycon_silva
          <span className="text-accent">()</span>;
        </div>

        <div className="hidden h-full flex-1 items-center justify-center lg:flex">
          {navLinks.map((nv) => (
            <Button key={nv.href} variant="link" className="text-sm" asChild>
              <Link href={nv.href}>
                <span className="scramble">{nv.label}</span>
              </Link>
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
