"use client";
import styles from "./navigationBar.module.css";
import "./mobileNavigationBar.css";
import { useState } from "react";

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
  const [checked, setChecked] = useState(false);
  const handleClick = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setChecked(false);
  };
  return (
    <>
      <nav role="navigation" className={styles.desktop_navigation_bar}>
        <ul className={styles.navigation_menu}>
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
      <nav className={styles.mobile_navigation_bar} role="navigation">
        <div id="menuToggle">
          <input
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
            type="checkbox"
          />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
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
        </div>
      </nav>
    </>
  );
}
