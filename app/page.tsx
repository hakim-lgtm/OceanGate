import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Djibouti } from "@/components/sections/djibouti";
import { Services } from "@/components/sections/services";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Djibouti />
      <Services />
      <Stats />
      <Heritage />
      <Contact />
    </>
  );
}
