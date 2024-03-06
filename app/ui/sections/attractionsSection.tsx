import { Header } from "../header";
import common from "./common.module.css";
import styles from "./attractionsSection.module.css";
import { useState } from "react";
import Image from "next/image";
import { Attraction, AttractionGroup } from "@/app/data/attraction";

interface AttractionSectionProps {
  groups: AttractionGroup[];
}

export function AttractionsSection({ groups }: AttractionSectionProps) {
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  function getStyle(baseStyle: string, index: number) {
    if (index === hovered) {
      return `${baseStyle} ${styles.img_placeholder_grow}`;
    } else if (hovered !== undefined) {
      return `${baseStyle} ${styles.img_placeholder_shrink}`;
    } else {
      return baseStyle;
    }
  }
  return (
    <div className={`${styles.attractions_section} ${common.text_container}`}>
      <Header textAlign="center">Αξιοθέατα</Header>
      <div className={styles.attractions_grid}>
        {groups.map((group, index) => (
          <AttractionGridColumn
            key={`attraction-${index}`}
            getStyle={getStyle}
            setHovered={setHovered}
            attractions={group.items}
            withGap={group.withGap}
          />
        ))}
      </div>
    </div>
  );
}

interface AttractionGridColumnProps {
  attractions: Attraction[];
  withGap?: boolean;
  setHovered(n: number | undefined): void;
  getStyle(s: string, i: number): string;
}

function AttractionGridColumn(props: AttractionGridColumnProps) {
  return (
    <div
      className={
        props.withGap
          ? styles.attractions_grid_item_with_gap
          : styles.attractions_grid_item
      }
    >
      {props.attractions.map((attraction) => {
        return (
          <div
            key={`img-item-${attraction.id}`}
            className={props.getStyle(styles.img_placeholder, attraction.id)}
            onMouseOver={() => {
              props.setHovered(attraction.id);
            }}
            onMouseLeave={() => {
              props.setHovered(undefined);
            }}
          >
            <Image
              width={150}
              height={280}
              className={styles.attraction_img}
              alt={`attraction image ${attraction.id}`}
              src={attraction.image}
              layout="responsive"
            />
            <a href={attraction.link} target="_blank" className={styles.text}>
              {attraction.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
