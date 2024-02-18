import { Header } from "../header";
import common from "./common.module.css";

export function AttractionsSection() {
    return <div className={common.text_container}>
        <Header>Αξιοθέατα</Header>
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
