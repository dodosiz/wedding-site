interface Restaurant {
  link: string;
  name: string;
  description?: string;
}

export interface Location {
  name: string;
  restaurants: Restaurant[];
}

export interface RestaurantGroup {
  name: string;
  locations: Location[];
}

export const FOOD_GROUPS: RestaurantGroup[] = [
  {
    name: "Ταβέρνες",
    locations: [
      {
        name: "Ερμούπολη",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d6851874-Reviews-Mazi-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Mazi",
            description: "(Η πιο ωραία αυλή του νησιού)",
          },
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g616163-d12572083-Reviews-Avant_Garden-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Avant Garden",
            description: "(Έξοχη, δημιουργική κουζίνα σε μια όμορφη αυλή)",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4182504-Reviews-Sta_Vaporia-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Στα Βαπόρια",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d3167480-Reviews-Amvix-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Amvix",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d10352367-Reviews-To_Tsipouradiko_Tis_Mirsinis-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Το Τσιπουράδικο της Μυρσίνης",
          },
        ],
      },
      {
        name: "Κίνι",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d780363-Reviews-Allou_Yialou-Kini_Syros_Cyclades_South_Aegean.html",
            name: "Αλλού Γυαλού",
            description:
              "(Σερβίρει πρωτότυπα πιάτα σε μια μεγάλη βεράντα πάνω στη θάλασσα)",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d3566771-Reviews-Dyo_Tzitzikia_Sta_Armyrikia-Kini_Syros_Cyclades_South_Aegean.html",
            name: "Δυο Τζιτζίκια στ’ Αρμυρίκια",
            description: "(παραθαλάσσιο ταβερνάκι με θαλασσινά)",
          },
        ],
      },
      {
        name: "Γαλησσάς",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1184009-d2194506-Reviews-Iliovasilema-Galissas_Syros_Cyclades_South_Aegean.html",
            name: "ηλιοβασίλεμα",
            description: "Σύρος",
          },
        ],
      },
      {
        name: "Ποσειδωνία",
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g1190346-d10538290-Reviews-Ono_Concept-Poseidonia_Syros_Cyclades_South_Aegean.html",
            name: "Ono Concept",
          },
        ],
      },
      {
        name: "Άη Μιχάλης",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d2465522-Reviews-To_Plakostroto-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Πλακόστρωτο",
            description:
              "(στην Απάνω Μεριά που έχει θέα συγκλονιστική και έξοχα μαγειρευτά)",
          },
        ],
      },
      {
        name: "Αληθινή",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d4702189-Reviews-Mitsos_Taverna_Syros-Syros_Cyclades_South_Aegean.html",
            name: "ο Μήτσος",
            description: "(ξακουστός αν είσαι λάτρης του κρέατος)",
          },
        ],
      },
      {
        name: "Αχλάδι",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g6212274-d8494672-Reviews-Achladi_Restaurant-Vari_Syros_Cyclades_South_Aegean.html",
            name: "Ταβέρνα Αχλάδι",
            description: "(θαλασσινά και ψαράκια)",
          },
        ],
      },
    ],
  },
  {
    name: "Brunch / καφέ",
    locations: [
      {
        name: "Ερμούπολη",
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Hotel_Review-g15278394-d21131122-Reviews-Aristide_Hotel-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: "Aristide",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d6851874-Reviews-Mazi-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Mazi",
            description: "(Η πιο ωραία αυλή του νησιού)",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d20814947-Reviews-Armadillo_Coffee_brewery-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Armadillo",
            description:
              "(το brunch στη Σύρο σε μία από τις πιο ψαγμένες εκδοχές του Okio Cafe Bar: το brunch στη Σύρο δίπλα στη θάλασσα)",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d24110872-Reviews-Epta_Syros_Island-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: "Epta",
          },
        ],
      },
      {
        name: "Ποσειδωνία",
        restaurants: [
          {
            link: "https://www.tripadvisor.fr/Restaurant_Review-g1190346-d8531435-Reviews-Perroquet_Tranquille-Poseidonia_Syros_Cyclades_South_Aegean.html",
            name: "Le Perroquet Tranquille",
            description: "(φτιάχνουν τα ωραιότερα κροκ μαντάμ και κροκ μεσιέ)",
          },
        ],
      },
      {
        name: "Άνω Σύρος",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g3581255-d12437862-Reviews-Syrianon_Kafepoteio-Ano_Siros_Syros_Cyclades_South_Aegean.html",
            name: "Συριανών Καφεποτείο",
          },
        ],
      },
      {
        name: "Μαρίνα Φοίνικα",
        restaurants: [
          {
            link: "https://www.facebook.com/baobabsyros/",
            name: "Bao Bap",
          },
        ],
      },
    ],
  },
  {
    name: "Ποτό",
    locations: [
      {
        name: "Ερμούπολη",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d17734098-Reviews-Ciel-Syros_Cyclades_South_Aegean.html",
            name: "Ciel",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4701521-Reviews-Kouchico-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Kouchico",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d25956517-Reviews-Quattro_Syros-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: "Quattro",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d23993350-Reviews-Barrio-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: "Barrio",
          },
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g15278394-d20935934-Reviews-Porte_Galleria_Del_Cocktail-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: "Porte Galleria del cocktail",
          },
        ],
      },
      {
        name: "Άνω Σύρος",
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g3581255-d24928896-Reviews-Theosis-Ano_Siros_Syros_Cyclades_South_Aegean.html",
            name: "Theosis",
            description: "(Τα πιο έμπειρα κοκτέιλ στη Σύρο)",
          },
        ],
      },
    ],
  },
  {
    name: "Γλυκό",
    locations: [
      {
        name: "Ερμούπολη",
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d10814495-Reviews-M_I_Athymaritis-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Αθυμαρίτη",
            description:
              "(Τα ροδίνια είναι τα συριανά, αριστοκρατικά αμυγδαλωτά, στου Αθυμαρίτη φτιάχνουν την απόλυτη εκδοχή)",
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d5030866-Reviews-Django_Gelato-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: "Django Gelato",
            description: "(Για φρέσκο, χειροποίητο παγωτό)",
          },
        ],
      },
    ],
  },
];
