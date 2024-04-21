import Image from "next/image";
import styles from "./locationSection.module.css";
import { Header } from "../header";
import Link from "next/link";
import { SupportedLang, localize } from "@/app/lib/localization";

export function LocationSection({ lang }: { lang: SupportedLang }) {
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
        <Header textAlign="center">
          {localize(
            [
              { lang: "el", text: "Η Τοποθεσία" },
              { lang: "en", text: "The Location" },
            ],
            lang
          )}
        </Header>
        <p className={styles.location_info}>
          {localize(
            [
              { lang: "el", text: "Το μυστήριο θα τελεστεί στην" },
              { lang: "en", text: "The ceremony will take place at" },
            ],
            lang
          )}
          <br />
          <strong>
            {localize(
              [
                { lang: "el", text: "εκκλησία του Αγίου Νικολάου" },
                { lang: "en", text: "St. Nicholas Church" },
              ],
              lang
            )}
          </strong>
          <br />
          {localize(
            [
              { lang: "el", text: " στην Ερμούπολη Σύρου," },
              { lang: "en", text: " in Ermoupoli, Syros," },
            ],
            lang
          )}
          <br />
          <strong>
            {localize(
              [
                { lang: "el", text: "ώρα 18:00" },
                { lang: "en", text: "at 18:00" },
              ],
              lang
            )}
          </strong>
          .
        </p>
        <p className={styles.location_info}>
          {localize(
            [
              { lang: "el", text: "Στη συνέχεια θα κατευθυνθούμε στην" },
              { lang: "en", text: "Afterwards, we will head to" },
            ],
            lang
          )}
          <br />
          <strong>
            {localize(
              [
                { lang: "el", text: "βίλλα 3 lagoons" },
                { lang: "en", text: "Villa 3 Lagoons" },
              ],
              lang
            )}
          </strong>
          <br />
          {localize(
            [
              {
                lang: "el",
                text: "όπου και θα πραγματοποιηθεί η γαμήλια δεξίωση.",
              },
              { lang: "en", text: "where the wedding reception will be held." },
            ],
            lang
          )}
        </p>
        <Link className={styles.rsvp_button} href={`/${lang}/rsvp`}>
          {localize(
            [
              { lang: "el", text: "Δήλωσε Συμμετοχή" },
              { lang: "en", text: "RSVP" },
            ],
            lang
          )}
        </Link>
        <p className={styles.deadline}>
          {localize(
            [
              {
                lang: "el",
                text: "Παρακαλούμε επιβεβαιώστε την παρουσία σας μέχρι την ",
              },
              { lang: "en", text: "Please confirm your attendance by " },
            ],
            lang
          )}{" "}
          <strong>
            {localize(
              [
                { lang: "el", text: "15η Μαΐου" },
                { lang: "en", text: "Mai 15th" },
              ],
              lang
            )}
          </strong>{" "}
          {localize(
            [
              {
                lang: "el",
                text: " για να μας βοηθήσετε να οργανώσουμε την εκδήλωση μας.",
              },
              { lang: "en", text: " to help us organize our event." },
            ],
            lang
          )}
        </p>
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
                {localize(
                  [
                    {
                      lang: "el",
                      text: " Εκκλησία του Αγίου Νικολάου",
                    },
                    { lang: "en", text: "St. Nicholas Church" },
                  ],
                  lang
                )}
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
