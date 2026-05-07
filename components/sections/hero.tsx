import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="mt-16 flex min-h-screen items-center border-b border-b-neutral-200">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-medium">Full Stack Developer</h3>
          <h1 className="font-heading text-6xl leading-20 font-semibold">
            Building amazing <br /> Experiences
          </h1>

          <div>
            <p className="text-muted-foreground leading-7">
              Sou um desenvolvedor full-stack apaixonado por criar aplicações
              web
            </p>

            <p className="text-muted-foreground">
              Disponível para novos projetos
            </p>
          </div>

          <div className="space-x-4">
            <Button size="xl">
              Projetos <ArrowRight />
            </Button>
            <Button variant="outline" size="xl">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
