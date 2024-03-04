import styles from "./getThereSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function GetThereSection() {
  const [showShip, setShowShip] = useState(false);
  const [showPlane, setShowPlane] = useState(false);
  const getClassName = (show: boolean) => {
    return `${styles.p_hidden} ${show ? styles.p_shown : undefined}`;
  };
  const handleClick = (input: boolean, callback: () => void) => {
    const element = document.getElementById("bottom");
    if (element && !input) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
    callback();
  };
  return (
    <>
      <div className={common.text_container}>
        <Header textAlign="center">Μετάβαση</Header>
        <p>
          Η πλεονεκτική θέση της Σύρου στην καρδιά των Κυκλάδων και η κοντινή
          της απόσταση από την Αθήνα δίνει τη δυνατότητα σε όλους τους
          ταξιδιώτες να μεταβούν στο νησί με όποιο τρόπο τους εξυπηρετεί
          περισσότερο, είτε αεροπορικώς είτε με πλοίο.
        </p>
      </div>
      <div className={styles.grid_container}>
        <div>
          <h2
            className={`${styles.text_center} ${styles.clickable}`}
            onClick={() =>
              handleClick(showShip, () => {
                setShowShip(!showShip);
              })
            }
          >
            ΑΚΤΟΠΛΟΙΚΗ ΜΕΤΑΚΙΝΗΣΗ{" "}
            {showShip ? (
              <ChevronDownIcon style={{ width: "15px" }} />
            ) : (
              <ChevronRightIcon style={{ width: "15px" }} />
            )}
          </h2>
          <p className={getClassName(showShip)}>
            Η σύνδεση είναι καθημερινή με δρομολόγια από και προς τα λιμάνια:
            Πειραιά, (διάρκεια: 4 ώρες με συμβατικό πλοίο της γραμμής ή 2,5 ώρες
            με high-speed), Ραφήνας (διάρκεια: 1,5 ώρα), Κυκλάδων, Δωδεκανήσων,
            Βορείου Αιγαίου, Καβάλας.
          </p>
          <p className={getClassName(showShip)}>
            Ταξιδιωτικά πρακτορεία για περισσότερες πληροφορίες:
          </p>
          <p className={getClassName(showShip)}>
            <b>Hellenic Seaways:</b> +30 210 4199000
          </p>
          <p className={getClassName(showShip)}>
            <b>Blue Star Ferries:</b> +30 210 8919800
          </p>
        </div>
        <div>
          <h2
            className={`${styles.text_center} ${styles.clickable}`}
            onClick={() =>
              handleClick(showPlane, () => {
                setShowPlane(!showPlane);
              })
            }
          >
            ΑΕΡΟΠΟΡΙΚΩΣ{" "}
            {showPlane ? (
              <ChevronDownIcon style={{ width: "15px" }} />
            ) : (
              <ChevronRightIcon style={{ width: "15px" }} />
            )}
          </h2>
          <p className={getClassName(showPlane)}>
            Σε καθημερινή βάση εκτελούνται πτήσεις από Αθήνα προς Σύρο και
            αντίστροφα, με την πτήση να διαρκεί μόλις 25 λεπτά.
          </p>
          <p className={getClassName(showPlane)}>
            <b>Αεροδρομίο Σύρου:</b> +30 22810 81900
          </p>
          <p className={getClassName(showPlane)}>
            <b>Αεροδρόμιο Ελευθέριος Βενιζέλος:</b> +30 210 3530000
          </p>
          <p className={getClassName(showPlane)}>
            <b>Sky Express:</b> 801 1128288
          </p>
          <p className={getClassName(showPlane)}>
            <b>Astra Airlines:</b> 801 7007466
          </p>
        </div>
        <div id="bottom"></div>
      </div>
    </>
  );
}
