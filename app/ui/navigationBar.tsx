"use client";
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
  const handleClick = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
      <nav role="navigation" className={styles.mobile_navigation_bar}></nav>
    </>
  );
}
