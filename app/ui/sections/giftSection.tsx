import Image from "next/image";
import { Header } from "../header";
import styles from "./giftSection.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

export function GiftSection({ lang }: { lang: SupportedLang }) {
  return (
    <div className="text_container">
      <Header textAlign="center">
        {localize(
          [
            { lang: "el", text: "Δώρα" },
            { lang: "en", text: "Gifts" },
          ],
          lang
        )}
      </Header>
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
        {localize(
          [
            { lang: "el", text: "Προαιρετική λίστα γάμου:" },
            { lang: "en", text: "Optional wedding list:" },
          ],
          lang
        )}
      </p>
      <ul className={styles.account}>
        <li>
          {localize(
            [
              { lang: "el", text: "Πειραιώς" },
              { lang: "en", text: "Pireus Bank" },
            ],
            lang
          )}
          : GR4001722520005252110485996 (
          {localize(
            [
              { lang: "el", text: "ΠΑΠΑΣΤΟΙΤΣΗ ΝΑΤΑΛΙΑ" },
              { lang: "en", text: "PAPASTOITSI NATALIA" },
            ],
            lang
          )}
          )
        </li>
      </ul>
    </div>
  );
}
