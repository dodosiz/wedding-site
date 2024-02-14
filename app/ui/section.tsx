"use client";
import { useEffect } from "react";
import styles from "./section.module.css";

export interface SectionProps {
  id: string;
  children?: React.ReactNode;
  fixedHeight?: boolean;
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
      className={props.fixedHeight ? styles.fixed_height : styles.base_section}
    >
      {props.children}
    </section>
  );
}
