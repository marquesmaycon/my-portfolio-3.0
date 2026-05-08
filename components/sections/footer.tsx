import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container py-20">
        <span className="">&copy; {year}. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
