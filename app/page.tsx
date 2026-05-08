import { Header } from "@/components/header"
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero"
import { Tape } from "@/components/sections/tape";

export default function Home() {
  return (
    <div className="divide divide-y">
      <Header />
      <Hero />
      <Tape />
      <Contact />
      <Footer />
    </div>
  );
}
