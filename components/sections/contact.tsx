import { ArrowUpRight } from "lucide-react";

import { Button } from "../ui/button";

export function Contact() {
  return (
    <div className="">
      <section className="divide container grid grid-cols-3 divide-x">
        <div className="row-span-2">
          <p>Entre em contato</p>
          <h4>Vamos criar algo juntos</h4>
        </div>
        <div className="divide div col-span-2 grid grid-cols-2 divide-x divide-y divide-neutral-200">
          <ContactCard title="LinkedIn" subtitle="Maycon Henrique da Silva" />
          <ContactCard title="GitHub" subtitle="@marquesmaycon" />
          <ContactCard title="E-mail" subtitle="mayconmarquesh@gmail.com" />
          <ContactCard title="WhatsApp" subtitle="+55 44 99117-3753" />
        </div>
      </section>
    </div>
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
      className="flex min-h-64 flex-col p-4 transition-colors hover:bg-neutral-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <h5 className="">{title}</h5>
          <h6>{subtitle}</h6>
        </div>
        <div>Icon</div>
      </div>
      <div className="mt-auto">
        <Button variant="outline">
          Abrir <ArrowUpRight />
        </Button>
      </div>
    </a>
  );
};
