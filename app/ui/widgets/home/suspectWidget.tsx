import { Suspect } from "@/app/data/suspects";
import { Header } from "../../header";
import Image from "next/image";
import styles from "./suspectWidget.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

interface SuspectWidgetProps {
  suspect: Suspect;
  lang: SupportedLang;
}

export function SuspectWidget({ suspect, lang }: SuspectWidgetProps) {
  return (
    <div className={styles.suspects_grid_item}>
      <Header textAlign="center" level={3}>
        {localize(suspect.title, lang)}
        <br />
        {localize(suspect.subtitle, lang)}
      </Header>
      {suspect.image && suspect.alt ? (
        <Image
          className={styles.suspect_img}
          width={250}
          height={500}
          alt={suspect.alt}
          src={suspect.image}
        />
      ) : (
        <div className={styles.suspects_grid_box}></div>
      )}
      <p>{localize(suspect.moto, lang)}</p>
    </div>
  );
}
