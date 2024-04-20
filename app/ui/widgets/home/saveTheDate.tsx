import Image from "next/image";
import styles from "./saveTheDate.module.css";
import Link from "next/link";
import { SupportedLang, localize } from "@/app/lib/localization";

interface SaveTheDateProps {
  topDesktop: number;
  topMobile: number;
  lang: SupportedLang;
}

export function SaveTheDate({ topDesktop, topMobile, lang }: SaveTheDateProps) {
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
        <TimelineDate lang={lang} />
        <Link className={styles.rsvp_button} href="/rsvp">
          RSVP
        </Link>
      </div>
      <div
        className={styles.save_the_date_text_mobile}
        style={{ opacity: `${100 - topMobile}%` }}
      >
        <TimelineDate lang={lang} />
        <Link className={styles.rsvp_button} href="/rsvp">
          RSVP
        </Link>
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

function TimelineDate({ lang }: { lang: SupportedLang }) {
  return (
    <>
      <p className={styles.timeline_date}>
        {localize(
          [
            { lang: "el", text: "Κυριακή" },
            { lang: "en", text: "Sunday" },
          ],
          lang
        )}
        <br />
        {localize(
          [
            { lang: "el", text: "28 Ιουλίου 2024" },
            { lang: "en", text: "The 28th of July" },
          ],
          lang
        )}
        <br />
        <span>
          {localize(
            [
              { lang: "el", text: "Ώρα 18:00" },
              { lang: "en", text: "At 18:00" },
            ],
            lang
          )}
        </span>
      </p>
      <p>
        {localize(
          [
            { lang: "el", text: "Ερμούπολη, Σύρος" },
            { lang: "en", text: "Ermoupoli, Syros" },
          ],
          lang
        )}
      </p>
    </>
  );
}
