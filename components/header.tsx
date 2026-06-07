import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

import { useNavigationLinks } from "@/hooks/use-navigation-links";
import { fadeAnimationBase } from "@/lib/constanst";

import { MobileMenu } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export function Header() {
  const container = useRef(null);

  const links = useNavigationLinks();

  useGSAP(
    () => {
      gsap.from("h3", {
        ...fadeAnimationBase,
        x: -40,
      });

      gsap.from(".scramble, .gsap-fade-in", {
        ...fadeAnimationBase,
        x: 30,
        stagger: 0.08,
        delay: 0.15,
      });
    },
    { scope: container },
  );

  return (
    <header
      ref={container}
      className="bg-background/10 fixed inset-x-0 z-50 flex h-12 backdrop-blur-sm md:h-14 lg:h-16"
    >
      <div className="container flex flex-1 items-center">
        <h3 className="flex-1 font-medium">
          <span className="text-accent">function</span>
          {"  "} maycon_silva
          <span className="text-accent">()</span>;
        </h3>

        <div className="hidden h-full flex-1 items-center justify-center lg:flex">
          {links.map((nv) => (
            <Button key={nv.href} variant="link" className="text-sm" asChild>
              <Link href={nv.href} className="nav-link">
                <span className="scramble">{nv.label}</span>
              </Link>
            </Button>
          ))}
        </div>

        <div className="gsap-fade-in hidden h-full flex-1 items-center justify-end lg:flex">
          <ThemeSwitcher />
        </div>

        <div className="gsap-fade-in">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
