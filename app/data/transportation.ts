export interface Transportation {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  contacts: Contact[];
}

interface Contact {
  name: string;
  telephone: string;
}

export const SHIP: Transportation = {
  contacts: [
    {
      name: "Hellenic Seaways",
      telephone: "+30 210 4199000",
    },
    {
      name: "Blue Star Ferries",
      telephone: "+30 210 8919800",
    },
  ],
  description:
    "Η σύνδεση είναι καθημερινή με δρομολόγια από και προς τα λιμάνια: Πειραιά, (διάρκεια: 4 ώρες με συμβατικό πλοίο της γραμμής ή 2,5 ώρες με high-speed), Ραφήνας (διάρκεια: 1,5 ώρα), Κυκλάδων, Δωδεκανήσων, Βορείου Αιγαίου, Καβάλας. Ταξιδιωτικά πρακτορεία για περισσότερες πληροφορίες:",
  image: "/transition/ship.png",
  imageAlt: "ship",
  title: "ΑΚΤΟΠΛΟΙΚΗ ΜΕΤΑΚΙΝΗΣΗ",
};

export const PLANE: Transportation = {
  image: "/transition/airplane.png",
  imageAlt: "airplane",
  title: "ΑΕΡΟΠΟΡΙΚΩΣ",
  description:
    "Σε καθημερινή βάση εκτελούνται πτήσεις από Αθήνα προς Σύρο και αντίστροφα, με την πτήση να διαρκεί μόλις 25 λεπτά.",
  contacts: [
    {
      name: "Αεροδρομίο Σύρου",
      telephone: "+30 22810 81900",
    },
    {
      name: "Αεροδρόμιο Ελευθέριος Βενιζέλος",
      telephone: "+30 210 3530000",
    },
    {
      name: "Sky Express",
      telephone: "801 1128288",
    },
    {
      name: "Astra Airlines",
      telephone: "801 7007466",
    },
  ],
};
