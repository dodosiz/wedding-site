import { LocalizedText } from "../lib/localization";

export interface Transportation {
  title: LocalizedText[];
  description: LocalizedText[];
  image: string;
  imageAlt: string;
  contacts: Contact[];
}

interface Contact {
  name: LocalizedText[];
  telephone: string;
}

export const SHIP: Transportation = {
  contacts: [
    {
      name: [
        { lang: "el", text: "Hellenic Seaways" },
        { lang: "en", text: "Hellenic Seaways" },
      ],
      telephone: "+30 210 4199000",
    },
    {
      name: [
        { lang: "el", text: "Blue Star Ferries" },
        { lang: "en", text: "Blue Star Ferries" },
      ],
      telephone: "+30 210 8919800",
    },
  ],
  description: [
    {
      lang: "el",
      text: "Η σύνδεση είναι καθημερινή με δρομολόγια από και προς τα λιμάνια: Πειραιά, (διάρκεια: 4 ώρες με συμβατικό πλοίο της γραμμής ή 2,5 ώρες με high-speed), Ραφήνας (διάρκεια: 1,5 ώρα), Κυκλάδων, Δωδεκανήσων, Βορείου Αιγαίου, Καβάλας. Ταξιδιωτικά πρακτορεία για περισσότερες πληροφορίες:",
    },
    {
      lang: "en",
      text: "The connection is daily with routes to and from the ports: Piraeus (duration: 4 hours with a conventional ferry or 2.5 hours with a high-speed ferry), Rafina (duration: 1.5 hours), Cyclades, Dodecanese, North Aegean, Kavala. Travel agencies for more information:",
    },
  ],
  image: "/transition/ship.png",
  imageAlt: "ship",
  title: [
    { lang: "el", text: "ΑΚΤΟΠΛΟΪΚΩΣ" },
    { lang: "en", text: "BY SHIP" },
  ],
};

export const PLANE: Transportation = {
  image: "/transition/airplane.png",
  imageAlt: "airplane",
  title: [
    { lang: "el", text: "ΑΕΡΟΠΟΡΙΚΩΣ" },
    { lang: "en", text: "BY PLANE" },
  ],
  description: [
    {
      lang: "el",
      text: "Σε καθημερινή βάση εκτελούνται πτήσεις από Αθήνα προς Σύρο και αντίστροφα, με την πτήση να διαρκεί μόλις 25 λεπτά.",
    },
    {
      lang: "en",
      text: "There are daily flights from Athens to Syros and vice versa, with the flight taking just 25 minutes.",
    },
  ],
  contacts: [
    {
      name: [
        { lang: "el", text: "Αεροδρομίο Σύρου" },
        { lang: "en", text: "Syros Airport" },
      ],
      telephone: "+30 22810 81900",
    },
    {
      name: [
        { lang: "el", text: "Αεροδρόμιο Ελευθέριος Βενιζέλος" },
        {
          lang: "en",
          text: "Eleftherios Venizelos Athens International Airport",
        },
      ],
      telephone: "+30 210 3530000",
    },
    {
      name: [
        { lang: "el", text: "Sky Express" },
        { lang: "en", text: "Sky Express" },
      ],
      telephone: "801 1128288",
    },
    {
      name: [
        { lang: "el", text: "Astra Airlines" },
        { lang: "en", text: "Astra Airlines" },
      ],
      telephone: "801 7007466",
    },
  ],
};
