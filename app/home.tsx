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
import { GiftSection } from "./ui/sections/giftSection";
import { SupportedLang } from "./lib/localization";

export default function Home({ lang }: { lang: SupportedLang }) {
  const [active, setActive] = useState("home");

  return (
    <>
      <NavigationBar
        active={active}
        setActive={setActive}
        lang={lang}
        items={[
          {
            texts: [
              { lang: "el", text: "Αρχική" },
              { lang: "en", text: "Home" },
            ],
            link: "home",
          },
          {
            texts: [
              { lang: "el", text: "Τοποθεσία" },
              { lang: "en", text: "Location" },
            ],
            link: "location",
          },
          {
            texts: [
              { lang: "el", text: "Διαμονή" },
              { lang: "en", text: "Accomondation" },
            ],
            link: "accomondation",
          },
          {
            texts: [
              { lang: "el", text: "Φαγητό" },
              { lang: "en", text: "Food" },
            ],
            link: "food",
          },
          {
            texts: [
              { lang: "el", text: "Αξιοθέατα" },
              { lang: "en", text: "Attractions" },
            ],
            link: "attractions",
          },
          {
            texts: [
              { lang: "el", text: "Δώρα" },
              { lang: "en", text: "Gifts" },
            ],
            link: "gifts",
          },
          {
            texts: [
              { lang: "el", text: "Μετάβαση" },
              { lang: "en", text: "Transition" },
            ],
            link: "getThere",
          },
        ]}
      />
      <main>
        <Section id="home" setActiveNav={setActive}>
          <HomeSection
            suspects={SUSPECTS}
            suspectsMobile={SUSPECTS_MOBILE}
            lang={lang}
          />
        </Section>
        <Section id="location" setActiveNav={setActive}>
          <LocationSection lang={lang} />
        </Section>
        <Section id="accomondation" setActiveNav={setActive}>
          <AccomondationSection groups={ACCOMONDATIONS} lang={lang} />
        </Section>
        <Section id="food" setActiveNav={setActive}>
          <FoodSection groups={FOOD_GROUPS} lang={lang} />
        </Section>
        <Section id="attractions" setActiveNav={setActive}>
          <AttractionsSection groups={ATTRACTION_GROUPS} lang={lang} />
        </Section>
        <Section id="gifts" setActiveNav={setActive}>
          <GiftSection />
        </Section>
        <Section id="getThere" setActiveNav={setActive}>
          <GetThereSection />
        </Section>
      </main>
    </>
  );
}
