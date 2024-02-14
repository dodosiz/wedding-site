"use client";
import { useState } from "react";
import { NavigationBar } from "./ui/navigationBar";
import { Section, SectionProps } from "./ui/section";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState("home");
  const sections: SectionProps[] = [
    {
      id: "home",
      color: "cornflowerblue",
      setActiveNav: setActive,
      children: <HomeSection />,
    },
    {
      id: "location",
      color: "white",
      setActiveNav: setActive,
      children: <LocationSection />,
    },
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
          { text: "Αρχική", link: "home" },
          { text: "Τοποθεσία", link: "location" },
          { text: "Ημερομηνια", link: "date" },
          { text: "Διαμονη", link: "accomondation" },
          { text: "Μεταβαση", link: "getThere" },
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

function HomeSection() {
  return (
    <div className={styles.home_container}>
      <div className={styles.white_background}>
        <div>{"Παντρευόμαστε και βαφτίζουμε το κοριτσάκι μας."}</div>
      </div>
      <div className={styles.artemis_background}></div>
    </div>
  );
}

function LocationSection() {
  return (
    <div className={styles.location_container}>
      <h2>The location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Image width={273} height={200} alt="Garidas" src="/garidas.gif" />
    </div>
  );
}
