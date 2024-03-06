export interface Accomondation {
  name: string;
  link: string;
}

export interface AccomondationGroup {
  name: string;
  items: Accomondation[];
}

export const ACCOMONDATIONS: AccomondationGroup[] = [
  {
    name: "Ξενοδοχεία",
    items: [
      {
        name: "Wind Tales",
        link: "https://www.booking.com/hotel/gr/syros-windurf-camp.en-gb.html",
      },
      {
        name: "Shapes Luxury Suites",
        link: "https://www.booking.com/hotel/gr/shapes-luxury-suites.en-gb.html",
      },
      {
        name: "SYROS SOUL LUXURY SUITES",
        link: "https://www.booking.com/hotel/gr/syros-soul-luxury-suites.en-gb.html",
      },
      {
        name: "Electra Syros Boutique Hotel",
        link: "https://www.booking.com/hotel/gr/helectra.en-gb.html",
      },
    ],
  },
  {
    name: "Airbnb",
    items: [
      {
        name: "Dolce Syra",
        link: "https://www.airbnb.gr/rooms/694057471202833154",
      },
      {
        name: "Στούντιο Λουκουμάκι",
        link: "https://www.airbnb.gr/rooms/27135651",
      },
      {
        name: "Esperance Corner",
        link: "https://www.airbnb.gr/rooms/34038217",
      },
      {
        name: "Karma Suite 2",
        link: "https://www.airbnb.gr/rooms/907685113310315988",
      },
      {
        name: "Βίγια Μαρία Σύρος, Κρόκος",
        link: "https://www.airbnb.gr/rooms/630984939501554521",
      },
    ],
  },
];
