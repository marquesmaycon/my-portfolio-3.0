import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="fixed inset-x-0 flex h-16 border-b border-b-neutral-200 bg-white/10 backdrop-blur-md">
      <div className="container flex flex-1 items-center divide-x divide-neutral-200">
        <div className="flex h-full flex-1 items-center">maycon_silva();</div>
        <div className="flex h-full flex-1 items-center justify-center">
          <Button variant="link" size="sm">
            Home
          </Button>
          <Button variant="link" size="sm">
            Sobre
          </Button>
          <Button variant="link" size="sm">
            Projetos
          </Button>
        </div>
        <div className="flex h-full flex-1 items-center justify-end">
          socials
        </div>
      </div>
    </div>
  );
}
