"use client";
import { useState } from "react";
import { NavigationBar } from "./ui/navigationBar";
import { Section, SectionProps } from "./ui/section";
import styles from "./page.module.css";
import Image from "next/image";
import { HomeSection } from "./ui/sections/homeSection";
import { LocationSection } from "./ui/sections/locationSection";
import { FoodSection } from "./ui/sections/foodSection";

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
          <HomeSection />
        </Section>
        <Section id="location" setActiveNav={setActive}>
          <LocationSection />
        </Section>
        <Section id="accomondation" setActiveNav={setActive} fixedHeight>
          <div
            style={{
              backgroundColor: "aquamarine",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </Section>
        <Section id="food" setActiveNav={setActive}>
          <FoodSection />
        </Section>
        <Section id="attractions" setActiveNav={setActive} fixedHeight>
          <div
            style={{
              backgroundColor: "royalblue",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </Section>
        <Section id="getThere" setActiveNav={setActive} fixedHeight>
          <div
            style={{ backgroundColor: "beige", width: "100%", height: "100%" }}
          ></div>
        </Section>
      </main>
    </>
  );
}
