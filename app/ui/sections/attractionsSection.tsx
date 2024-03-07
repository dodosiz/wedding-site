import { Header } from "../header";
import styles from "./attractionsSection.module.css";
import { useState } from "react";
import { AttractionGroup } from "@/app/data/attraction";
import { AttractionGridColumn } from "../widgets/attractions/attractionGridColumn";

interface AttractionSectionProps {
  groups: AttractionGroup[];
}

export function AttractionsSection({ groups }: AttractionSectionProps) {
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  return (
    <div className={`${styles.attractions_section} text_container`}>
      <Header textAlign="center">Αξιοθέατα</Header>
      <div className={styles.attractions_grid}>
        {groups.map((group, index) => (
          <AttractionGridColumn
            key={`attraction-${index}`}
            setHovered={setHovered}
            hovered={hovered}
            attractions={group.items}
            withGap={group.withGap}
          />
        ))}
      </div>
    </div>
  );
}
