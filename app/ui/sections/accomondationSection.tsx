import Image from "next/image";
import { Header } from "../header";
import styles from "./accomondationSection.module.css";
import common from "./common.module.css";

export function AccomondationSection() {
  return (
    <div className={styles.location_section}>
      <Header className={styles.header_desktop} textAlign="center">Διαμονή</Header>
      <Image
        src="/accomondation/accom_desktop.jpg"
        className={styles.image_desktop}
        width={2719}
        height={1597}
        alt="accomondation"
        layout="responsive"
      />
      <Image
        src="/accomondation/accom_mobile.jpg"
        className={styles.image_mobile}
        width={1125}
        height={1224}
        alt="accomondation"
        layout="responsive"
      />
      <div className={styles.location_text}>
        <p>
          Παρακάτω παρουσιάζονται μερικά από τα δημοφιλή ξενοδοχεία στην Σύρο,
          καθώς και μερικά καταλύματα στην περιοχή της Ερμούπολης, προσφέροντας
          μια ευρεία γκάμα τιμών <br />για κάθε προϋπολογισμό.
        </p>
        <div className={styles.hotel_grid}>
          <div></div>
          <div>
            <h2>Ξενοδοχεία</h2>
            <ul>
              <li>
                <a
                  href="https://www.booking.com/hotel/gr/syros-windurf-camp.en-gb.html"
                  target="_blank"
                >
                  Wind Tales
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/gr/shapes-luxury-suites.en-gb.html"
                  target="_blank"
                >
                  Shapes Luxury Suites
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/gr/syros-soul-luxury-suites.en-gb.html"
                  target="_blank"
                >
                  SYROS SOUL LUXURY SUITES
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/gr/helectra.en-gb.html"
                  target="_blank"
                >
                  Electra Syros Boutique Hotel
                </a>
              </li>
            </ul>
          </div>
          <div></div>
          <div>
            <h2>Airbnb</h2>
            <ul>
              <li>
                <a
                  href="https://www.airbnb.gr/rooms/694057471202833154"
                  target="_blank"
                >
                  Dolce Syra
                </a>
              </li>
              <li>
                <a href="https://www.airbnb.gr/rooms/27135651" target="_blank">
                  Στούντιο Λουκουμάκι
                </a>
              </li>
              <li>
                <a href="https://www.airbnb.gr/rooms/34038217" target="_blank">
                  Esperance Corner
                </a>
              </li>
              <li>
                <a
                  href="https://www.airbnb.gr/rooms/907685113310315988"
                  target="_blank"
                >
                  Karma Suite 2
                </a>
              </li>
              <li>
                <a
                  href="https://www.airbnb.gr/rooms/630984939501554521"
                  target="_blank"
                >
                  Βίγια Μαρία Σύρος, Κρόκος
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        </div>
    </div>
  );
}
