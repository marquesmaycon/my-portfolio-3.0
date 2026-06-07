import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-8 py-8 sm:flex-row lg:py-29">
        <span>
          &copy; {year}. {t("rights")}
        </span>

        <span>Maycon Marques</span>
      </div>
    </footer>
  );
}
