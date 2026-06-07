import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { contacts } from "@/lib/constanst";

import { Button } from "../ui/button";

export function Contact() {
  const t = useTranslations("Contact");
  return (
    <section id="contact">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3">
          <div className="fade-up row-span-2 min-h-64 w-full border-b py-4 md:border-r md:border-l md:p-8 lg:border-b-0">
            <span className="text-muted-foreground">{t("eyebrow")}</span>
            <h4 className="font-heading mt-4 text-3xl leading-12 font-normal text-pretty sm:max-w-2/3 md:max-w-none">
              {t.rich("title", {
                span: (chunks) => (
                  <span className="text-accent font-extrabold">{chunks}</span>
                ),
              })}
            </h4>
          </div>
          <div className="bg-border col-span-2 grid gap-px md:grid-cols-2 md:border-r md:border-l lg:border-l-0">
            {contacts.map(({ link, title, subtitle }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                className="bg-background hover:bg-border flex min-h-64 flex-col py-4 transition-colors md:p-8"
              >
                <div className="fade-up flex items-start justify-between">
                  <div>
                    <h5 className="font-heading text-2xl font-bold">{title}</h5>
                    <h6 className="text-muted-foreground">{subtitle}</h6>
                  </div>
                </div>
                <div className="fade-up mt-auto">
                  <Button asChild variant="link">
                    <span>
                      {t("openButton")} <ArrowUpRight />
                    </span>
                  </Button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
