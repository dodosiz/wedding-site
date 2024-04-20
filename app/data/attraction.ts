import { LocalizedText } from "../lib/localization";

export interface Attraction {
  id: number;
  image: string;
  text: LocalizedText[];
  link: string;
}

export interface AttractionGroup {
  items: Attraction[];
  withGap?: boolean;
}

export const ATTRACTION_GROUPS: AttractionGroup[] = [
  {
    items: [
      {
        id: 0,
        image: "/attractions/dhmarxeio.jpg",
        text: [
          { lang: "el", text: "Η Πλατεία Μιαούλη" },
          { lang: "en", text: "Miaouli Square" },
        ],
        link: "https://maps.app.goo.gl/315s56Zdfz2zayEn8",
      },
    ],
  },
  {
    items: [
      {
        id: 1,
        image: "/attractions/agios_stefanos.jpg",
        text: [
          { lang: "el", text: "Άγιος Στέφανος" },
          { lang: "en", text: "Saint Stephen" },
        ],
        link: "https://maps.app.goo.gl/B3rxnywN9LBbeHHVA",
      },
      {
        id: 2,
        image: "/attractions/agiou_pakou.jpg",
        text: [
          { lang: "el", text: "Αγία Πακού" },
          { lang: "en", text: "Agia Paku" },
        ],
        link: "https://maps.app.goo.gl/hHNbRicqTJpuVhBV7",
      },
    ],
  },
  {
    items: [
      {
        id: 3,
        image: "/attractions/klostoifant.jpg",
        text: [
          { lang: "el", text: "Μουσείο Κλωστοϋφαντουργίας" },
          { lang: "en", text: "Museum of Textiles" },
        ],
        link: "https://maps.app.goo.gl/tPaDZ4tz95wxYnzC7",
      },
      {
        id: 4,
        image: "/attractions/grammata.jpg",
        text: [
          { lang: "el", text: "Τα Γράμματα" },
          { lang: "en", text: "The Letters" },
        ],
        link: "https://maps.app.goo.gl/HU83NG95wF2UxenS8",
      },
    ],
    withGap: true,
  },
  {
    items: [
      {
        id: 5,
        image: "/attractions/theatro.jpg",
        text: [
          { lang: "el", text: "Δημοτικό Θέατρο Απόλλων" },
          { lang: "en", text: "Apollo Municipal Theatre" },
        ],
        link: "https://maps.app.goo.gl/q2srCfX3PMZ4K7AS8",
      },
      {
        id: 6,
        image: "/attractions/vaporia.jpg",
        text: [
          { lang: "el", text: "Συνοικία Βαπόρια" },
          { lang: "en", text: "District of Vaporia" },
        ],
        link: "https://maps.app.goo.gl/GqRF7GtkafciSt7F7",
      },
    ],
  },
  {
    items: [
      {
        id: 7,
        image: "/attractions/dhmarxeio2.jpg",
        text: [
          { lang: "el", text: "Δημαρχείο της Σύρου" },
          { lang: "en", text: "Syros Town Hall" },
        ],
        link: "https://maps.app.goo.gl/odZ57ujvQKHnhPe37",
      },
    ],
  },
];
