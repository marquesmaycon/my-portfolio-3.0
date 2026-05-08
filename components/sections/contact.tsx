import { ArrowUpRight } from "lucide-react";

import { Button } from "../ui/button";

const contacts = [
  {
    title: "LinkedIn",
    subtitle: "Maycon Henrique da Silva",
    link: "https://www.linkedin.com/in/mayconhenrique/",
  },
  {
    title: "GitHub",
    subtitle: "@marquesmaycon",
    link: "https://github.com/marquesmaycon",
  },
  {
    title: "E-mail",
    subtitle: "mayconmarquesh@gmail.com",
    link: "mailto:mayconmarquesh@gmail.com",
  },
  {
    title: "WhatsApp",
    subtitle: "+55 44 99117-3753",
    link: "https://web.whatsapp.com/send?phone=5544991173753&text=Oi%20Maycon%2C%20vim%20do%20seu%20portf%C3%B3lio",
  },
];

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3">
          <div className="row-span-2 min-h-64 w-full border-b py-4 md:border-r md:border-l md:p-8">
            <span className="text-muted-foreground">Entre em contato</span>
            <h4 className="font-heading mt-4 text-3xl font-normal text-pretty sm:max-w-2/3 md:max-w-none">
              Vamos criar algo{" "}
              <span className="text-accent font-extrabold">incrível</span>{" "}
              juntos
            </h4>
          </div>
          <div className="bg-border col-span-2 grid gap-px md:grid-cols-2 md:border-r">
            {contacts.map((c) => (
              <ContactCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  title: string;
  subtitle: string;
  link: string;
};

const ContactCard = ({ title, subtitle, link }: ContactCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-background flex min-h-64 flex-col py-4 transition-colors hover:bg-slate-800 md:p-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <h5 className="font-heading text-2xl font-bold">{title}</h5>
          <h6 className="text-muted-foreground">{subtitle}</h6>
        </div>
        {/* <div>Icon</div> */}
      </div>
      <div className="mt-auto">
        <Button asChild variant="link">
          <span>
            Abrir <ArrowUpRight />
          </span>
        </Button>
      </div>
    </a>
  );
};
