import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";

export function HomeSection() {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTransition(!showTransition)
    }, 3000)
    return () => clearInterval(interval)
  })
  return (
    <>
    <div className={styles.home_background_container}>
      <div className={`${styles.artemis_background} ${showTransition ? styles.transition : undefined}`}></div>
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
