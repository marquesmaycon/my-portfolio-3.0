import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container flex items-center justify-between py-20">
        <span className="">&copy; {year}. Todos os direitos reservados.</span>

        <span>Maycon Silva</span>
      </div>
    </footer>
  );
}
