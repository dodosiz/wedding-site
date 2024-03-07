"use client";
import { useState } from "react";
import { NavigationBar } from "./ui/navigationBar";
import { Section } from "./ui/section";
import { HomeSection } from "./ui/sections/homeSection";
import { LocationSection } from "./ui/sections/locationSection";
import { FoodSection } from "./ui/sections/foodSection";
import { AccomondationSection } from "./ui/sections/accomondationSection";
import { GetThereSection } from "./ui/sections/getThereSection";
import { AttractionsSection } from "./ui/sections/attractionsSection";
import { ACCOMONDATIONS } from "./data/accomondation";
import { ATTRACTION_GROUPS } from "./data/attraction";
import { FOOD_GROUPS } from "./data/food";
import { SUSPECTS, SUSPECTS_MOBILE } from "./data/suspects";

export default function Home() {
  const [active, setActive] = useState("home");
  return (
    <>
      <NavigationBar
        active={active}
        setActive={setActive}
        items={[
          { text: "Αρχική", link: "home" },
          { text: "Τοποθεσία", link: "location" },
          { text: "Διαμονή", link: "accomondation" },
          { text: "Φαγητό", link: "food" },
          { text: "Αξιοθέατα", link: "attractions" },
          { text: "Μετάβαση", link: "getThere" },
        ]}
      />
      <main>
        <Section id="home" setActiveNav={setActive}>
          <HomeSection suspects={SUSPECTS} suspectsMobile={SUSPECTS_MOBILE} />
        </Section>
        <Section id="location" setActiveNav={setActive}>
          <LocationSection />
        </Section>
        <Section id="accomondation" setActiveNav={setActive}>
          <AccomondationSection groups={ACCOMONDATIONS} />
        </Section>
        <Section id="food" setActiveNav={setActive}>
          <FoodSection groups={FOOD_GROUPS} />
        </Section>
        <Section id="attractions" setActiveNav={setActive}>
          <AttractionsSection groups={ATTRACTION_GROUPS} />
        </Section>
        <Section id="getThere" setActiveNav={setActive}>
          <GetThereSection />
        </Section>
      </main>
    </>
  );
}
