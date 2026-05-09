import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

import { navLinks } from "@/lib/constans";

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
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="bg-background">
        <SheetHeader>
          <SheetTitle className="">Navegação</SheetTitle>
          <SheetDescription>Navegue pelas seções</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start gap-8 pt-8">
          {navLinks.map((nv) => (
            <SheetClose asChild key={nv.href}>
              <Button asChild variant="link">
                <Link href={nv.href}>
                  {nv.label} <ArrowRight />
                </Link>
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
