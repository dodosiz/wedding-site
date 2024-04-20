import { LocalizedText } from "../lib/localization";

export interface Accomondation {
  name: LocalizedText[];
  link: string;
}

export interface AccomondationGroup {
  name: LocalizedText[];
  items: Accomondation[];
}

export const ACCOMONDATIONS: AccomondationGroup[] = [
  {
    name: [
      { lang: "el", text: "Ξενοδοχεία" },
      { lang: "en", text: "Hotels" },
    ],
    items: [
      {
        name: [
          { lang: "el", text: "Wind Tales" },
          { lang: "en", text: "Wind Tales" },
        ],
        link: "https://www.booking.com/hotel/gr/syros-windurf-camp.en-gb.html",
      },
      {
        name: [
          { lang: "el", text: "Shapes Luxury Suites" },
          { lang: "en", text: "Shapes Luxury Suites" },
        ],
        link: "https://www.booking.com/hotel/gr/shapes-luxury-suites.en-gb.html",
      },
      {
        name: [
          { lang: "el", text: "SYROS SOUL LUXURY SUITES" },
          { lang: "en", text: "SYROS SOUL LUXURY SUITES" },
        ],
        link: "https://www.booking.com/hotel/gr/syros-soul-luxury-suites.en-gb.html",
      },
      {
        name: [
          { lang: "el", text: "Electra Syros Boutique Hotel" },
          { lang: "en", text: "Electra Syros Boutique Hotel" },
        ],
        link: "https://www.booking.com/hotel/gr/helectra.en-gb.html",
      },
    ],
  },
  {
    name: [
      { lang: "el", text: "Airbnb" },
      { lang: "en", text: "Airbnb" },
    ],
    items: [
      {
        name: [
          { lang: "el", text: "Dolce Syra" },
          { lang: "en", text: "Dolce Syra" },
        ],
        link: "https://www.airbnb.gr/rooms/694057471202833154",
      },
      {
        name: [
          { lang: "el", text: "Στούντιο Λουκουμάκι" },
          { lang: "en", text: "Studio Lukumaki" },
        ],
        link: "https://www.airbnb.gr/rooms/27135651",
      },
      {
        name: [
          { lang: "el", text: "Esperance Corner" },
          { lang: "en", text: "Esperance Corner" },
        ],
        link: "https://www.airbnb.gr/rooms/34038217",
      },
      {
        name: [
          { lang: "el", text: "Karma Suite 2" },
          { lang: "en", text: "Karma Suite 2" },
        ],
        link: "https://www.airbnb.gr/rooms/907685113310315988",
      },
      {
        name: [
          { lang: "el", text: "Βίγια Μαρία Σύρος, Κρόκος" },
          { lang: "en", text: "Bigia Maria Syros, Krokos" },
        ],
        link: "https://www.airbnb.gr/rooms/630984939501554521",
      },
    ],
  },
];
