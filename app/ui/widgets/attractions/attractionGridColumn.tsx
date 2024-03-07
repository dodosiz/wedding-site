import { Attraction } from "@/app/data/attraction";
import Image from "next/image";
import styles from "./attractionGridColumn.module.css";

interface AttractionGridColumnProps {
  attractions: Attraction[];
  withGap?: boolean;
  hovered: number | undefined;
  setHovered(n: number | undefined): void;
}

export function AttractionGridColumn(props: AttractionGridColumnProps) {
  function getStyle(baseStyle: string, index: number) {
    if (index === props.hovered) {
      return `${baseStyle} ${styles.img_placeholder_grow}`;
    } else if (props.hovered !== undefined) {
      return `${baseStyle} ${styles.img_placeholder_shrink}`;
    } else {
      return baseStyle;
    }
  }
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
            className={getStyle(styles.img_placeholder, attraction.id)}
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
