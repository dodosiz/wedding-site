import Image from "next/image";
import { Header } from "../header";
import styles from "./giftSection.module.css"

export function GiftSection() {
    return (
        <div className="text_container">
          <Header textAlign="center">Δώρα</Header>
          <div className={styles.piggy}>
            <Image
                src="/piggy.png"
                alt="piggy"
                width={700}
                height={600}
                layout="responsive"
            />
          </div>
          <p>
            Προαιρετική λίστα γάμου:
          </p>
          <ul>
            <li>Πειραιώς: GR4001722520005252110485996 (ΠΑΠΑΣΤΟΙΤΣΗ ΝΑΤΑΛΙΑ)</li>
          </ul>
        </div>
      );
}