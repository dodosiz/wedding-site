import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";

export function HomeSection() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
      if (counter > 6) {
        setCounter(0)
      }
    }, 3000)
    return () => clearInterval(interval)
  })
  return (
    <>
    <div className={styles.home_background_container}>
      <div className={getBackgroundClass(counter)}></div>
    </div>
    <div className={styles.home_text_container}>
      <div className={styles.save_the_date}>Save the Date</div>
      <div className={styles.date_heading}>Κυριακή</div>
      <div className={styles.date_heading}>28 Ιουλίου 2024</div>
      <div className={styles.location_heading} style={{marginTop: "50px"}}>Ερμούπολη, Σύρος</div>
    </div>
    </>
  );
}

function getBackgroundClass(index: number) {
  switch(index) {
    case 0:
      return styles.home_background0;
    case 1:
      return styles.home_background1;
    case 2:
      return styles.home_background2;
    case 3:
      return styles.home_background3;
    case 4:
      return styles.home_background4;
    case 5:
      return styles.home_background5;
    case 6:
      return styles.home_background6;
    case 7:
      return styles.home_background7;
    default:
      return styles.home_background0;
  }
}
