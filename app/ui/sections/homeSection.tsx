import { Header } from "../header";
import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function HomeSection() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 2) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const next = () => {
    if (counter > 2) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const previous = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(3);
    }
  };
  return (
    <>
      <div className={styles.home_background_container}>
        <div className={getBackgroundClass(counter)}>
          <div className={styles.arrow} onClick={previous}>
            <ChevronLeftIcon />
          </div>
          <div className={`${styles.arrow} ${styles.right}`} onClick={next}>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className={styles.home_text_container}>
        <Header>Save the Date</Header>
        <h2 style={{ margin: 0 }}>Κυριακή</h2>
        <h2 style={{ margin: 0 }}>28 Ιουλίου 2024</h2>
        <p style={{ margin: 0 }}>Ερμούπολη, Σύρος</p>
      </div>
    </>
  );
}

function getBackgroundClass(index: number) {
  switch (index) {
    case 0:
      return styles.home_background0;
    case 1:
      return styles.home_background1;
    case 2:
      return styles.home_background2;
    case 3:
      return styles.home_background3;
    default:
      return styles.home_background0;
  }
}
