import { Header } from "../header";
import common from "./common.module.css";
import styles from "./attractionsSection.module.css";
import { useState } from "react";

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
            <AttractionGridColumn getStyle={getStyle} setHovered={setHovered} indexes={[0]} />
            <AttractionGridColumn getStyle={getStyle} setHovered={setHovered} indexes={[1, 2]} />
            <AttractionGridColumn getStyle={getStyle} setHovered={setHovered} indexes={[3, 4]} withGap />
            <AttractionGridColumn getStyle={getStyle} setHovered={setHovered} indexes={[5, 6]} />
            <AttractionGridColumn getStyle={getStyle} setHovered={setHovered} indexes={[7]} />
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

interface AttractionGridColumnProps {
    indexes: number[];
    withGap?: boolean;
    setHovered(n: number | undefined): void;
    getStyle(s: string, i: number): string;
}

function AttractionGridColumn(props: AttractionGridColumnProps) {
    return <div className={
        props.withGap ? styles.attractions_grid_item_with_gap : styles.attractions_grid_item}>
        {props.indexes.map(index => {
            return <div
                key={`img-item-${index}`}
                className={props.getStyle(styles.img_placeholder, index)}
                onMouseOver={() => {props.setHovered(index)}}
                onMouseLeave={() => {props.setHovered(undefined)}}
            ></div>
        })}
    </div>
}
