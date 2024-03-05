import Image from "next/image";
import styles from "./locationSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";

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
      <div className={common.text_container}>
        <Header textAlign="center">{"Η Τοποθεσία"}</Header>
        <p>
          {
            "Το μυστήριο θα τελεστεί στην εκκλησία του αγίου Νικολάου στην Ερμούπολη Σύρου. Η ώρα "
          }
          <a
            target="_blank"
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NmY0bGxxNjRpajQxOGM0b21nZjlobW5lY24gdC52LmFzdmVzdG9wb3Vsb3NAbQ&amp;tmsrc=t.v.asvestopoulos%40gmail.com"
          >
            18:00 στις 28 Ιουλίου 2024.
          </a>
        </p>
        <p>Στη συνέχεια θα κατευθυνθούμε στην βίλλα 3 lagoons, όπου και θα πραγματοποιηθεί η γαμήλια δεξίωση.</p>
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
          <a
            href="https://maps.app.goo.gl/GKHcszwbC9EM9fHp9"
            target="_blank"
            className={styles.pin_link}
          >
            <Image src="/pin.gif" width={100} height={100} alt="pin" />
          </a>
        </div>
      </div>
    </>
  );
}
