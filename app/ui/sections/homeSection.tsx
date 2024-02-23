import { Header } from "../header";
import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
        <Header textAlign="center">Save the Date</Header>
        <h2 style={{ margin: 0 }}>Κυριακή</h2>
        <h2 style={{ margin: 0 }}>28 Ιουλίου 2024</h2>
        <p style={{ margin: 0 }}>Ερμούπολη, Σύρος</p>
      </div>
      <div className={styles.home_suspects_container}>
        <Header textAlign="center">The Usual<br/>Suspects</Header>
        <div className={styles.suspects_grid}>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>Ο γαμπρός<br />προγραμματιστής</Header>
            <Image width={250} height={500} alt="theo" src="/usual_suspects/theo.jpg" />
            <p>Αυτός που πληρώνει την νύφη.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>Η νύφη<br />αρχιτέκτονας</Header>
            <div className={styles.suspects_grid_box}></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>Το βαπτιστήρι<br />CEO</Header>
            <div className={styles.suspects_grid_box}></div>
            <p>Η μικρή ταραξίας</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>Η κουμπάρα<br />σομελιέ</Header>
            <div className={styles.suspects_grid_box}></div>
            <p>Προμήθεια και διακίνηση αλκοόλ.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>Ο νονός<br />ψυχολόγος</Header>
            <Image width={250} height={500} alt="noulis" src="/usual_suspects/noulis.jpg" />
            <p>Αξιολόγηση και διάγνωση καταλληλότητας προσαρμογής σε πάρτυ.</p>
          </div>
        </div>
        <div className={styles.suspects_logo}>
          <Image width={275} height={208} alt="the usual suspects" src="/usual_suspects.png" />
          <p>&quot;The greatest trick the devil ever pulled was convincing the world he did not exist.&quot;</p>
        </div>
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
