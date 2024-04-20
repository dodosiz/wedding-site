import { Header } from "../header";
import styles from "./attractionsSection.module.css";
import { useState } from "react";
import { AttractionGroup } from "@/app/data/attraction";
import { AttractionGridColumn } from "../widgets/attractions/attractionGridColumn";
import { SupportedLang, localize } from "@/app/lib/localization";

interface AttractionSectionProps {
  groups: AttractionGroup[];
  lang: SupportedLang;
}

export function AttractionsSection({ groups, lang }: AttractionSectionProps) {
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  return (
    <div className={`${styles.attractions_section} text_container`}>
      <Header textAlign="center">
        {localize(
          [
            { lang: "el", text: "Αξιοθέατα" },
            { lang: "en", text: "Attractions" },
          ],
          lang
        )}
      </Header>
      <div className={styles.attractions_grid}>
        {groups.map((group, index) => (
          <AttractionGridColumn
            key={`attraction-${index}`}
            setHovered={setHovered}
            hovered={hovered}
            lang={lang}
            attractions={group.items}
            withGap={group.withGap}
          />
        ))}
      </div>
    </div>
  );
}
