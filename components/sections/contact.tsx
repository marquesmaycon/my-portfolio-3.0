import { ArrowUpRight } from "lucide-react";

import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3">
          <div className="row-span-2 min-h-64 w-full border-b p-8 md:border-r md:border-l">
            <span className="text-muted-foreground">Entre em contato</span>
            <h4 className="font-heading mt-4 text-3xl font-normal text-pretty sm:max-w-2/3 md:max-w-none">
              Vamos criar algo{" "}
              <span className="text-accent font-extrabold">incrível</span>{" "}
              juntos
            </h4>
          </div>
          <div className="bg-border col-span-2 grid gap-px md:grid-cols-2 md:border-r">
            <ContactCard title="LinkedIn" subtitle="Maycon Henrique da Silva" />
            <ContactCard title="GitHub" subtitle="@marquesmaycon" />
            <ContactCard title="E-mail" subtitle="mayconmarquesh@gmail.com" />
            <ContactCard title="WhatsApp" subtitle="+55 44 99117-3753" />
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  title: string;
  subtitle: string;
};

const ContactCard = ({ title, subtitle }: ContactCardProps) => {
  return (
    <a
      href="#"
      className="bg-background hover:bg-border flex min-h-64 flex-col p-8 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div>
          <h5 className="font-heading text-2xl font-bold">{title}</h5>
          <h6 className="text-muted-foreground">{subtitle}</h6>
        </div>
        <div>Icon</div>
      </div>
      <div className="mt-auto">
        <Button asChild variant="ghost">
          <span>
            Abrir <ArrowUpRight />
          </span>
        </Button>
      </div>
    </a>
  );
};
