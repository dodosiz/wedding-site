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
            <div className={styles.attractions_grid_item}>
                <div
                    className={getStyle(styles.img_placeholder, 0)}
                    onMouseOver={() => {setHovered(0)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
            </div>
            <div className={styles.attractions_grid_item2}>
                <div
                    className={getStyle(styles.img_placeholder, 1)}
                    onMouseOver={() => {setHovered(1)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
                <div
                    className={getStyle(styles.img_placeholder, 2)}
                    onMouseOver={() => {setHovered(2)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
            </div>
            <div className={styles.attractions_grid_item3}>
                <div
                    className={getStyle(styles.img_placeholder, 3)}
                    onMouseOver={() => {setHovered(3)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
                <div
                    className={getStyle(styles.img_placeholder, 4)}
                    onMouseOver={() => {setHovered(4)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
            </div>
            <div className={styles.attractions_grid_item2}>
                <div
                    className={getStyle(styles.img_placeholder, 5)}
                    onMouseOver={() => {setHovered(5)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
                <div
                    className={getStyle(styles.img_placeholder, 6)}
                    onMouseOver={() => {setHovered(6)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
            </div>
            <div className={styles.attractions_grid_item}>
                <div
                    className={getStyle(styles.img_placeholder, 7)}
                    onMouseOver={() => {setHovered(7)}}
                    onMouseLeave={() => {setHovered(undefined)}}
                ></div>
            </div>
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
