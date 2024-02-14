"use client";
import { useEffect, useState } from "react";
import styles from "./navigationBar.module.css";

interface Item {
  text: string;
  link: string;
}

interface NavigationBarProps {
  active: string;
  setActive: (s: string) => void;
  items: Item[];
}

export function NavigationBar(props: NavigationBarProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);

  const handleClick = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav>
      <ul
        className={`${styles.navigation_menu} ${
          scrolled ? styles.scrolled : undefined
        }`}
      >
        {props.items.map((i) => (
          <li
            key={i.link}
            onClick={() => handleClick(i.link)}
            className={`${styles.navigation_item} ${
              i.link === props.active ? styles.active : undefined
            }`}
          >
            {i.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
