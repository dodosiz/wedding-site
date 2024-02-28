import { Header } from "../header";
import common from "./common.module.css";
import styles from "./attractionsSection.module.css";
import { useState } from "react";
import Image from "next/image";

export function AttractionsSection() {
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
        <AttractionGridColumn
          getStyle={getStyle}
          setHovered={setHovered}
          images={[
            {
              index: 0,
              path: "/attractions/dhmarxeio.jpg",
              text: "Δημαρχείο της Σύρου",
              link: "https://maps.app.goo.gl/odZ57ujvQKHnhPe37",
            },
          ]}
        />
        <AttractionGridColumn
          getStyle={getStyle}
          setHovered={setHovered}
          images={[
            {
              index: 1,
              path: "/attractions/agios_stefanos.jpg",
              text: "Άγιος Στέφανος",
              link: "https://maps.app.goo.gl/B3rxnywN9LBbeHHVA",
            },
            {
              index: 2,
              path: "/attractions/agiou_pakou.jpg",
              text: "Αγία Πακού",
              link: "https://maps.app.goo.gl/hHNbRicqTJpuVhBV7",
            },
          ]}
        />
        <AttractionGridColumn
          getStyle={getStyle}
          setHovered={setHovered}
          images={[
            {
              index: 3,
              path: "/attractions/kukladikhs.jpg",
              text: "Πινακοθήκη Κυκλάδων",
              link: "https://maps.app.goo.gl/UU9d2QfbrbEGyT6r6",
            },
            {
              index: 4,
              path: "/attractions/grammata.jpg",
              text: "Τα Γράμματα",
              link: "https://maps.app.goo.gl/HU83NG95wF2UxenS8",
            },
          ]}
          withGap
        />
        <AttractionGridColumn
          getStyle={getStyle}
          setHovered={setHovered}
          images={[
            {
              index: 5,
              path: "/attractions/theatro.jpg",
              text: "Δημοτικό Θέατρο Απόλλων",
              link: "https://maps.app.goo.gl/q2srCfX3PMZ4K7AS8",
            },
            {
              index: 6,
              path: "/attractions/vaporia.jpg",
              text: "Συνοικία Βαπόρια",
              link: "https://maps.app.goo.gl/GqRF7GtkafciSt7F7",
            },
          ]}
        />
        <AttractionGridColumn
          getStyle={getStyle}
          setHovered={setHovered}
          images={[
            {
              index: 7,
              path: "/attractions/dhmarxeio2.jpg",
              text: "Η Πλατεία Μιαούλη",
              link: "https://maps.app.goo.gl/315s56Zdfz2zayEn8",
            },
          ]}
        />
      </div>
    </div>
  );
}

interface Image {
  index: number;
  path: string;
  text: string;
  link: string;
}

interface AttractionGridColumnProps {
  images: Image[];
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
      {props.images.map((image) => {
        return (
          <a
            key={`img-item-${image.index}`}
            className={props.getStyle(styles.img_placeholder, image.index)}
            onMouseOver={() => {
              props.setHovered(image.index);
            }}
            onMouseLeave={() => {
              props.setHovered(undefined);
            }}
            href={image.link}
            target="_blank"
          >
            <Image
              width={150}
              height={280}
              className={styles.attraction_img}
              alt={`attraction image ${image.index}`}
              src={image.path}
              layout="responsive"
            />
            <p className={styles.text}>{image.text}</p>
          </a>
        );
      })}
    </div>
  );
}
