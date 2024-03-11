export interface Suspect {
  title: string;
  subtitle: string;
  image?: string;
  alt?: string;
  moto: string;
}

export interface SuspectMobile {
  width: number;
  height: number;
  alt: string;
  image: string;
}

export const SUSPECTS: Suspect[] = [
  {
    title: "Ο γαμπρός",
    subtitle: "προγραμματιστής",
    alt: "theo",
    image: "/usual_suspects/theo.jpg",
    moto: "Full-stack προγραμματισμός πάρτυ.",
  },
  {
    title: "Η νύφη",
    subtitle: "αρχιτέκτονας",
    alt: "natalia",
    image: "/usual_suspects/natalia.jpg",
    moto: "Σχεδιασμός και οργάνωση πάρτυ με γεωμετρική ακρίβεια.",
  },
  {
    title: "Το βαπτιστήρι",
    subtitle: "τσουρεκάκι",
    image: "/usual_suspects/artemis.jpg",
    alt: "artemis",
    moto: "Υπεύθυνη ψυχαγωγίας και διατάραξης κοινής ησυχίας.",
  },
  {
    title: "Η κουμπάρα",
    subtitle: "σομελιέ",
    moto: "Προμήθεια και διακίνηση αλκοόλ.",
    image: "/usual_suspects/alex.jpg",
    alt: "alex",
  },
  {
    title: "Ο νονός",
    subtitle: "ψυχολόγος",
    alt: "noulis",
    image: "/usual_suspects/noulis.jpg",
    moto: "Αξιολόγηση και διάγνωση καταλληλότητας προσαρμογής σε πάρτυ.",
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
    image: "/usual_suspects/mobile/1.jpg",
  },
  {
    width: 720,
    height: 1559,
    alt: "noulis and alex",
    image: "/usual_suspects/mobile/2.png",
  },
];
