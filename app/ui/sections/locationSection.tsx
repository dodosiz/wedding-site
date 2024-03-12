import Image from "next/image";
import styles from "./locationSection.module.css";
import { Header } from "../header";
import Link from "next/link";

export function LocationSection() {
  return (
    <>
      <div className={styles.location_image_container}>
        <div className={styles.ermoupolis_background}></div>
        <Image
          layout="responsive"
          src="/church1.JPG"
          className={styles.church_mobile}
          width={1449}
          height={968}
          alt="church mobile"
        />
      </div>
      <div className="text_container">
        <Header textAlign="center">{"Η Τοποθεσία"}</Header>
        <p className={styles.location_info}>
          Το μυστήριο θα τελεστεί στην<br/>
          <strong>εκκλησία του Αγίου Νικολάου</strong><br/> στην Ερμούπολη Σύρου,<br /><strong>ώρα 18:00</strong>.
        </p>
        <p className={styles.location_info}>
          Στη συνέχεια θα κατευθυνθούμε στην<br/><strong>βίλλα 3 lagoons</strong><br/>
          όπου και θα πραγματοποιηθεί η γαμήλια δεξίωση.
        </p>
        <Link className={styles.rsvp_button} href="/rsvp">
          Δήλωσε Συμμετοχή
        </Link>
        <div className={styles.location_pin_container}>
          <Image
            layout="responsive"
            src="/church_mobile.png"
            className={styles.church_mobile}
            width={336}
            height={270}
            alt="church mobile"
          />
          <Image
            layout="responsive"
            src="/church.png"
            className={styles.church_desktop}
            width={640}
            height={360}
            alt="church"
          />
          <div className={styles.pins_flex}>
            <div className={styles.pins_grid}>
              <Image src="/pin.gif" width={100} height={100} alt="pin" />
              <a
                href="https://maps.app.goo.gl/GKHcszwbC9EM9fHp9"
                target="_blank"
                className={styles.pin_link}
              >
                Εκκλησία του Αγίου Νικολάου
              </a>
            </div>
            <div className={styles.pins_grid}>
              <Image src="/pin.gif" width={100} height={100} alt="pin" />
              <a
                href="https://maps.app.goo.gl/VzYB1JTirb81WrZK9"
                target="_blank"
                className={styles.pin_link}
              >
                Villa 3 lagoons
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
