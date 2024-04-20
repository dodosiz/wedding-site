import { LocalizedText } from "../lib/localization";

interface Restaurant {
  link: string;
  name: LocalizedText[];
  description?: LocalizedText[];
}

export interface Location {
  name: LocalizedText[];
  restaurants: Restaurant[];
}

export interface RestaurantGroup {
  name: LocalizedText[];
  locations: Location[];
}

export const FOOD_GROUPS: RestaurantGroup[] = [
  {
    name: [
      { lang: "el", text: "Ταβέρνες" },
      { lang: "en", text: "Taverns" },
    ],
    locations: [
      {
        name: [
          { lang: "el", text: "Ερμούπολη" },
          { lang: "en", text: "Ermoupoli" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d6851874-Reviews-Mazi-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Mazi" },
              { lang: "en", text: "Mazi" },
            ],
            description: [
              { lang: "el", text: "(Η πιο ωραία αυλή του νησιού)" },
              {
                lang: "en",
                text: "(The most beautiful courtyard of the island)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g616163-d12572083-Reviews-Avant_Garden-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Avant Garden" },
              { lang: "en", text: "Avant Garden" },
            ],
            description: [
              {
                lang: "el",
                text: "(Έξοχη, δημιουργική κουζίνα σε μια όμορφη αυλή)",
              },
              {
                lang: "en",
                text: "(Excellent, creative cuisine in a beautiful courtyard)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4182504-Reviews-Sta_Vaporia-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Στα Βαπόρια" },
              { lang: "en", text: "Sta Vaporia" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d3167480-Reviews-Amvix-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Amvix" },
              { lang: "en", text: "Amvix" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d10352367-Reviews-To_Tsipouradiko_Tis_Mirsinis-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Το Τσιπουράδικο της Μυρσίνης" },
              { lang: "en", text: "The Tsipouradiko of Myrsini" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Κίνι" },
          { lang: "en", text: "Kini" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d780363-Reviews-Allou_Yialou-Kini_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Αλλού Γυαλού" },
              { lang: "en", text: "Allou Gialou" },
            ],
            description: [
              {
                lang: "el",
                text: "(Σερβίρει πρωτότυπα πιάτα σε μια μεγάλη βεράντα πάνω στη θάλασσα)",
              },
              {
                lang: "en",
                text: "(Serves original dishes on a large terrace overlooking the sea)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d3566771-Reviews-Dyo_Tzitzikia_Sta_Armyrikia-Kini_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Δυο Τζιτζίκια στ’ Αρμυρίκια" },
              { lang: "en", text: "Two cicadas in Armyrikia" },
            ],
            description: [
              { lang: "el", text: "(παραθαλάσσιο ταβερνάκι με θαλασσινά)" },
              { lang: "en", text: "(seaside tavern with seafood)" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Γαλησσάς" },
          { lang: "en", text: "Galissas" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g1184009-d2194506-Reviews-Iliovasilema-Galissas_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "ηλιοβασίλεμα" },
              { lang: "en", text: "iliovasilema" },
            ],
            description: [
              { lang: "el", text: "Σύρος" },
              { lang: "en", text: "Syros" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Ποσειδωνία" },
          { lang: "en", text: "Poseidonia" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g1190346-d10538290-Reviews-Ono_Concept-Poseidonia_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Ono Concept" },
              { lang: "en", text: "Ono Concept" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Άη Μιχάλης" },
          { lang: "en", text: "Saint Michalis" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d2465522-Reviews-To_Plakostroto-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Πλακόστρωτο" },
              { lang: "en", text: "Plakostroto" },
            ],
            description: [
              {
                lang: "el",
                text: "(στην Απάνω Μεριά που έχει θέα συγκλονιστική και έξοχα μαγειρευτά)",
              },
              {
                lang: "en",
                text: "(in Apano Meria which has a breathtaking view and superbly cooked food)",
              },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Αληθινή" },
          { lang: "en", text: "Alithini" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d4702189-Reviews-Mitsos_Taverna_Syros-Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "ο Μήτσος" },
              { lang: "en", text: "Mitsos" },
            ],
            description: [
              { lang: "el", text: "(ξακουστός αν είσαι λάτρης του κρέατος)" },
              { lang: "en", text: "(famous if you are a meat lover)" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Αχλάδι" },
          { lang: "en", text: "Achladi" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g6212274-d8494672-Reviews-Achladi_Restaurant-Vari_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Ταβέρνα Αχλάδι" },
              { lang: "en", text: "Taverna Achladi" },
            ],
            description: [
              { lang: "el", text: "(θαλασσινά και ψαράκια)" },
              { lang: "en", text: "(seafood and fishes)" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: [
      { lang: "el", text: "Brunch / καφέ" },
      { lang: "en", text: "Brunch / coffee" },
    ],
    locations: [
      {
        name: [
          { lang: "el", text: "Ερμούπολη" },
          { lang: "en", text: "Ermoupoli" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Hotel_Review-g15278394-d21131122-Reviews-Aristide_Hotel-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Aristide" },
              { lang: "en", text: "Aristide" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d6851874-Reviews-Mazi-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Mazi" },
              { lang: "en", text: "Mazi" },
            ],
            description: [
              { lang: "el", text: "(Η πιο ωραία αυλή του νησιού)" },
              {
                lang: "en",
                text: "(The most beautiful courtyard of the island)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d20814947-Reviews-Armadillo_Coffee_brewery-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Armadillo" },
              { lang: "en", text: "Armadillo" },
            ],
            description: [
              {
                lang: "el",
                text: "(το brunch στη Σύρο σε μία από τις πιο ψαγμένες εκδοχές του Okio Cafe Bar: το brunch στη Σύρο δίπλα στη θάλασσα)",
              },
              {
                lang: "en",
                text: "(brunch in Syros in one of the most sophisticated versions of Okio Cafe Bar: brunch in Syros by the sea)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d24110872-Reviews-Epta_Syros_Island-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Epta" },
              { lang: "en", text: "Epta" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Ποσειδωνία" },
          { lang: "en", text: "Poseidonia" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.fr/Restaurant_Review-g1190346-d8531435-Reviews-Perroquet_Tranquille-Poseidonia_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Le Perroquet Tranquille" },
              { lang: "en", text: "Le Perroquet Tranquille" },
            ],
            description: [
              {
                lang: "el",
                text: "(φτιάχνουν τα ωραιότερα κροκ μαντάμ και κροκ μεσιέ)",
              },
              {
                lang: "en",
                text: "(they make the finest croque madame and croque mademoiselle)",
              },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Άνω Σύρος" },
          { lang: "en", text: "Ano Syros" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g3581255-d12437862-Reviews-Syrianon_Kafepoteio-Ano_Siros_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Συριανών Καφεποτείο" },
              { lang: "en", text: "Syrianon roastery" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Μαρίνα Φοίνικα" },
          { lang: "en", text: "Marina Foinika" },
        ],
        restaurants: [
          {
            link: "https://www.facebook.com/baobabsyros/",
            name: [
              { lang: "el", text: "Bao Bap" },
              { lang: "en", text: "Bao Bap" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: [
      { lang: "el", text: "Ποτό" },
      { lang: "en", text: "Drinks" },
    ],
    locations: [
      {
        name: [
          { lang: "el", text: "Ερμούπολη" },
          { lang: "en", text: "Ermoupoli" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d17734098-Reviews-Ciel-Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Ciel" },
              { lang: "en", text: "Ciel" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4701521-Reviews-Kouchico-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Kouchico" },
              { lang: "en", text: "Kouchico" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d25956517-Reviews-Quattro_Syros-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Quattro" },
              { lang: "en", text: "Quattro" },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d23993350-Reviews-Barrio-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Barrio" },
              { lang: "en", text: "Barrio" },
            ],
          },
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g15278394-d20935934-Reviews-Porte_Galleria_Del_Cocktail-Ermoupoli_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Porte Galleria del cocktail" },
              { lang: "en", text: "Porte Galleria del cocktail" },
            ],
          },
        ],
      },
      {
        name: [
          { lang: "el", text: "Άνω Σύρος" },
          { lang: "en", text: "Ano Syros" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com/Restaurant_Review-g3581255-d24928896-Reviews-Theosis-Ano_Siros_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Theosis" },
              { lang: "en", text: "Theosis" },
            ],
            description: [
              { lang: "el", text: "(Τα πιο έμπειρα κοκτέιλ στη Σύρο)" },
              { lang: "en", text: "(The most experienced cocktails in Syros)" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: [
      { lang: "el", text: "Γλυκό" },
      { lang: "en", text: "Dessert" },
    ],
    locations: [
      {
        name: [
          { lang: "el", text: "Ερμούπολη" },
          { lang: "en", text: "Ermoupoli" },
        ],
        restaurants: [
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d10814495-Reviews-M_I_Athymaritis-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Αθυμαρίτη" },
              { lang: "en", text: "Anthymariti" },
            ],
            description: [
              {
                lang: "el",
                text: "(Τα ροδίνια είναι τα συριανά, αριστοκρατικά αμυγδαλωτά, στου Αθυμαρίτη φτιάχνουν την απόλυτη εκδοχή)",
              },
              {
                lang: "en",
                text: "(The roses are the Syrian, aristocratic almond trees, at Athimaritis they make the ultimate version)",
              },
            ],
          },
          {
            link: "https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d5030866-Reviews-Django_Gelato-Hermoupolis_Syros_Cyclades_South_Aegean.html",
            name: [
              { lang: "el", text: "Django Gelato" },
              { lang: "en", text: "Django Gelato" },
            ],
            description: [
              { lang: "el", text: "(Για φρέσκο, χειροποίητο παγωτό)" },
              { lang: "en", text: "(For fresh, handmade ice cream)" },
            ],
          },
        ],
      },
    ],
  },
];
