"use client";
import { useState } from "react";
import { NavigationBar } from "./ui/navigationBar";
import { Section, SectionProps } from "./ui/section";

export default function Home() {
  const [active, setActive] = useState("home");
  const sections: SectionProps[] = [
    { id: "home", color: "cornflowerblue", setActiveNav: setActive },
    { id: "location", color: "brown", setActiveNav: setActive },
    { id: "date", color: "aquamarine", setActiveNav: setActive },
    { id: "accomondation", color: "beige", setActiveNav: setActive },
    { id: "getThere", color: "darkgoldenrod", setActiveNav: setActive },
  ];
  return (
    <>
      <NavigationBar
        active={active}
        setActive={setActive}
        items={[
          { text: "Home", link: "home" },
          { text: "Location", link: "location" },
          { text: "Date", link: "date" },
          { text: "Accomondation", link: "accomondation" },
          { text: "How to get there", link: "getThere" },
        ]}
      />
      <main>
        {sections.map((s) => (
          <Section key={s.id} {...s} />
        ))}
      </main>
    </>
  );
}
