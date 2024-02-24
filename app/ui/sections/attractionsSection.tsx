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
    return <div className={`${styles.attractions_section} ${common.text_container}`}>
        <Header textAlign="center">Αξιοθέατα</Header>
        <div className={styles.attractions_grid}>
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 0, path: "/attractions/dhmarxeio.jpg", text: "Δημαρχείο της Σύρου"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 1, path: "/attractions/agios_stefanos.jpg", text: "Ναός Άγιος Στέφανος"},
                    {index: 2, path: "/attractions/agiou_pakou.jpg", text: "Αγία Πακού"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 3, path: "/attractions/kukladikhs.jpg", text: "Πινακοθήκη Κυκλάδων"},
                    {index: 4, path: "/attractions/grammata.jpg", text: "Τα Γράμματα"}
                ]}
                withGap
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 5, path: "/attractions/theatro.jpg", text: "Δημοτικό Θέατρο Απόλλων"},
                    {index: 6, path: "/attractions/vaporia.jpg", text: "Συνοικία Βαπόρια"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 7, path: "/attractions/dhmarxeio2.jpg", text: "Η Πλατεία Μιαούλη"}
                ]}
            />
        </div>
    </div>
}

interface Image {
    index: number;
    path: string;
    text: string;
}

interface AttractionGridColumnProps {
    images: Image[];
    withGap?: boolean;
    setHovered(n: number | undefined): void;
    getStyle(s: string, i: number): string;
}

function AttractionGridColumn(props: AttractionGridColumnProps) {
    return <div className={
        props.withGap ? styles.attractions_grid_item_with_gap : styles.attractions_grid_item}>
        {props.images.map(image => {
            return <div
                key={`img-item-${image.index}`}
                className={props.getStyle(styles.img_placeholder, image.index)}
                onMouseOver={() => {props.setHovered(image.index)}}
                onMouseLeave={() => {props.setHovered(undefined)}}
            >
                <Image
                    width={150}
                    height={280}
                    className={styles.attraction_img}
                    alt={`attraction image ${image.index}`}
                    src={image.path}
                />
                <p className={styles.text}>{image.text}</p>
            </div>
        })}
    </div>
}
