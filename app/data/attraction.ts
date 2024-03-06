export interface Attraction {
  id: number;
  image: string;
  text: string;
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
        text: "Η Πλατεία Μιαούλη",
        link: "https://maps.app.goo.gl/315s56Zdfz2zayEn8",
      },
    ],
  },
  {
    items: [
      {
        id: 1,
        image: "/attractions/agios_stefanos.jpg",
        text: "Άγιος Στέφανος",
        link: "https://maps.app.goo.gl/B3rxnywN9LBbeHHVA",
      },
      {
        id: 2,
        image: "/attractions/agiou_pakou.jpg",
        text: "Αγία Πακού",
        link: "https://maps.app.goo.gl/hHNbRicqTJpuVhBV7",
      },
    ],
  },
  {
    items: [
      {
        id: 3,
        image: "/attractions/klostoifant.jpg",
        text: "Μουσείο Κλωστοϋφαντουργίας",
        link: "https://maps.app.goo.gl/tPaDZ4tz95wxYnzC7",
      },
      {
        id: 4,
        image: "/attractions/grammata.jpg",
        text: "Τα Γράμματα",
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
        text: "Δημοτικό Θέατρο Απόλλων",
        link: "https://maps.app.goo.gl/q2srCfX3PMZ4K7AS8",
      },
      {
        id: 6,
        image: "/attractions/vaporia.jpg",
        text: "Συνοικία Βαπόρια",
        link: "https://maps.app.goo.gl/GqRF7GtkafciSt7F7",
      },
    ],
  },
  {
    items: [
      {
        id: 7,
        image: "/attractions/dhmarxeio2.jpg",
        text: "Δημαρχείο της Σύρου",
        link: "https://maps.app.goo.gl/odZ57ujvQKHnhPe37",
      },
    ],
  },
];
