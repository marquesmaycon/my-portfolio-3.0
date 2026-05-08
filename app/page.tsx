import { Header } from "@/components/header"
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero"
import { Tape } from "@/components/sections/tape";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Tape />
      <Contact />
    </>
  );
}
