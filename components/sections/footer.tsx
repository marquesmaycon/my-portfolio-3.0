import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-8 py-8 sm:flex-row lg:py-29">
        <span className="">&copy; {year}. Todos os direitos reservados.</span>

        <span>Maycon Silva</span>
      </div>
    </footer>
  );
}
