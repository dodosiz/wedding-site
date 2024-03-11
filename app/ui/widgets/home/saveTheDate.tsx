import Image from "next/image";
import styles from "./saveTheDate.module.css";
import Link from "next/link";

interface SaveTheDateProps {
  topDesktop: number;
  topMobile: number;
}

export function SaveTheDate({ topDesktop, topMobile }: SaveTheDateProps) {
  return (
    <div className={styles.save_the_date_grid}>
      <div></div>
      <div
        id="2"
        className={styles.save_the_date_letter_2}
        style={{ right: topDesktop }}
      >
        <Image
          src="/save_the_date/letter2.png"
          alt="letter 2"
          width={307}
          height={441}
        />
      </div>
      <div
        id="2_mobile"
        className={styles.save_the_date_letter_2_mobile}
        style={{ right: topMobile }}
      >
        <Image
          src="/save_the_date/letter2.png"
          alt="letter 2"
          width={112}
          height={161}
        />
      </div>
      <div
        className={styles.save_the_date_text}
        style={{ opacity: `${100 - topDesktop}%` }}
      >
        <p className={styles.timeline_date}>
          Κυριακή
          <br />
          28 Ιουλίου 2024
        </p>
        <p className={styles.timeline_place}>Ερμούπολη, Σύρος</p>
        <Link className={styles.rsvp_button} href="/rsvp">
          RSVP
        </Link>
        <h2 className={styles.timeline_title}>Timeline</h2>
      </div>
      <div
        className={styles.save_the_date_text_mobile}
        style={{ opacity: `${100 - topMobile}%` }}
      >
        <p className={styles.timeline_date}>
          Κυριακή
          <br />
          28 Ιουλίου 2024
        </p>
        <p className={styles.timeline_place}>Ερμούπολη, Σύρος</p>
        <Link className={styles.rsvp_button} href="/rsvp">
          RSVP
        </Link>
        <h2 className={styles.timeline_title}>Timeline</h2>
      </div>
      <div
        className={styles.save_the_date_letter_8}
        style={{ left: topDesktop }}
      >
        <Image
          src="/save_the_date/letter8.png"
          alt="letter 8"
          width={307}
          height={441}
        />
      </div>
      <div
        className={styles.save_the_date_letter_8_mobile}
        style={{ left: topMobile }}
      >
        <Image
          src="/save_the_date/letter8.png"
          alt="letter 8"
          width={112}
          height={161}
        />
      </div>
      <div></div>
    </div>
  );
}
