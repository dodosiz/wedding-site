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
                    {index: 0, path: "/attractions/dhmarxeio.jpg"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 1, path: "/attractions/agios_stefanos.jpg"},
                    {index: 2, path: "/attractions/agiou_pakou.jpg"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 3, path: "/attractions/kukladikhs.jpg"},
                    {index: 4, path: "/attractions/grammata.jpg"}
                ]}
                withGap
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 5, path: "/attractions/theatro.jpg"},
                    {index: 6, path: "/attractions/vaporia.jpg"}
                ]}
            />
            <AttractionGridColumn
                getStyle={getStyle}
                setHovered={setHovered}
                images={[
                    {index: 7, path: "/attractions/dhmarxeio2.jpg"}
                ]}
            />
        </div>
        <ul>
            <li>Σύρος - Αξιοθέατα Πολιτισμού</li>
            <li>Η Πλατεία Μιαούλη</li>
            <li>Δημαρχείο της Σύρου</li>
            <li>συνοικία Βαπόρια</li>
            <li>Βιομηχανικό Μουσείο της Ερμούπολης</li>
            <li>Δημοτικό Θέατρο Απόλλων</li>
            <li>Ναός Άγιος Στέφανος</li>
            <li>Αγία Πακού</li>
            <li>Πινακοθήκη Κυκλάδων</li>
        </ul>
    </div>
}

interface Image {
    index: number;
    path: string;
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
            return <Image
                width={150}
                height={280}
                key={`img-item-${image.index}`}
                className={props.getStyle(styles.img_placeholder, image.index)}
                onMouseOver={() => {props.setHovered(image.index)}}
                onMouseLeave={() => {props.setHovered(undefined)}}
                alt={`attraction image ${image.index}`}
                src={image.path}
            />
        })}
    </div>
}
