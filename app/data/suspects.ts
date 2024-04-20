import { LocalizedText } from "../lib/localization";

export interface Suspect {
  title: LocalizedText[];
  subtitle: LocalizedText[];
  image?: string;
  alt?: string;
  moto: LocalizedText[];
}

export interface SuspectMobile {
  width: number;
  height: number;
  alt: string;
  image: string;
}

export const SUSPECTS: Suspect[] = [
  {
    title: [
      { lang: "el", text: "Ο γαμπρός" },
      { lang: "en", text: "The groom" },
    ],
    subtitle: [
      { lang: "el", text: "προγραμματιστής" },
      { lang: "en", text: "programmer" },
    ],
    alt: "theo",
    image: "/usual_suspects/theo.jpg",
    moto: [
      { lang: "el", text: "Full-stack προγραμματισμός πάρτυ." },
      { lang: "en", text: "Full-stack party development" },
    ],
  },
  {
    title: [
      { lang: "el", text: "Η νύφη" },
      { lang: "en", text: "The bride" },
    ],
    subtitle: [
      { lang: "el", text: "αρχιτέκτονας" },
      { lang: "en", text: "architect" },
    ],
    alt: "natalia",
    image: "/usual_suspects/natalia.jpg",
    moto: [
      {
        lang: "el",
        text: "Σχεδιασμός και οργάνωση πάρτυ με γεωμετρική ακρίβεια.",
      },
      {
        lang: "en",
        text: "Design and organize parties with geometric precision.",
      },
    ],
  },
  {
    title: [
      { lang: "el", text: "Το βαπτιστήρι" },
      { lang: "en", text: "The baby" },
    ],
    subtitle: [
      { lang: "el", text: "τσουρεκάκι" },
      { lang: "en", text: "cupcake" },
    ],
    image: "/usual_suspects/artemis.jpg",
    alt: "artemis",
    moto: [
      {
        lang: "el",
        text: "Υπεύθυνη ψυχαγωγίας και διατάραξης κοινής ησυχίας.",
      },
      {
        lang: "en",
        text: "Responsible for entertainment and disturbance of common peace.",
      },
    ],
  },
  {
    title: [
      { lang: "el", text: "Η κουμπάρα" },
      { lang: "en", text: "The maid of honor" },
    ],
    subtitle: [
      { lang: "el", text: "σομελιέ" },
      { lang: "en", text: "sommelier" },
    ],
    moto: [
      { lang: "el", text: "Προμήθεια και διακίνηση αλκοόλ." },
      { lang: "en", text: "Supply and distribution of alcohol." },
    ],
    image: "/usual_suspects/alex.jpg",
    alt: "alex",
  },
  {
    title: [
      { lang: "el", text: "Ο νονός" },
      { lang: "en", text: "The godfather" },
    ],
    subtitle: [
      { lang: "el", text: "ψυχολόγος" },
      { lang: "en", text: "psychologist" },
    ],
    alt: "noulis",
    image: "/usual_suspects/noulis.jpg",
    moto: [
      {
        lang: "el",
        text: "Αξιολόγηση και διάγνωση καταλληλότητας προσαρμογής σε πάρτυ.",
      },
      {
        lang: "en",
        text: "Assessment and diagnosis of adaptability suitability for parties.",
      },
    ],
  },
];

export const SUSPECTS_MOBILE: SuspectMobile[] = [
  {
    width: 720,
    height: 625,
    alt: "theo",
    image: "/usual_suspects/mobile/0.png",
  },
  {
    width: 720,
    height: 1422,
    alt: "natalia and artemis",
    image: "/usual_suspects/mobile/1.png",
  },
  {
    width: 720,
    height: 1559,
    alt: "noulis and alex",
    image: "/usual_suspects/mobile/2.png",
  },
];
