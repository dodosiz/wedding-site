import { Suspect } from "@/app/data/suspects";
import { Header } from "../../header";
import Image from "next/image";
import styles from "./suspectWidget.module.css";

interface SuspectWidgetProps {
  suspect: Suspect;
}

export function SuspectWidget({ suspect }: SuspectWidgetProps) {
  return (
    <div className={styles.suspects_grid_item}>
      <Header textAlign="center" level={3}>
        {suspect.title}
        <br />
        {suspect.subtitle}
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
      <p>{suspect.moto}</p>
    </div>
  );
}
