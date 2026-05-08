import { ArrowRight, Menu } from "lucide-react";

import { navLinks } from "./header";
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
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Navegação</SheetTitle>
          <SheetDescription>Navega pelas seções</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start gap-8 pt-8">
          {navLinks.map((nv) => (
            <SheetClose asChild key={nv.href}>
              <Button asChild variant="link">
                <a href={nv.href}>
                  {nv.label} <ArrowRight />
                </a>
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
