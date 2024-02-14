"use client";
import { useEffect } from "react";
import styles from "./section.module.css";

export interface SectionProps {
  id: string;
  color: string;
  children?: React.ReactNode;
  setActiveNav: (n: string) => void;
}

export function Section(props: SectionProps) {
  useEffect(() => {
    const handleScroll = () => {
      const top =
        document.getElementById(props.id)?.getBoundingClientRect().top || 0;
      if (Math.abs(top) < 40) {
        props.setActiveNav(props.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);
  return (
    <section
      id={props.id}
      className={styles.base_section}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </section>
  );
}
