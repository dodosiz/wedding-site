"use client";
import Image from "next/image";
import styles from "./foodSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";

export function FoodSection() {
  return (
    <>
      <Header className={styles.food_header} textAlign="center">Γευστικές περιηγήσεις</Header>
      <div className={styles.grid_container}>
        <div className={styles.flex_container_left}>
          <Image
            className={styles.food_image}
            width={380}
            height={600}
            alt="eating outside"
            src="/food4.JPG"
          />
        </div>
        <div className={styles.flex_container_right}>
          <Image
            className={styles.food_image}
            width={600}
            height={390}
            alt="table with rose wine"
            src="/food1.JPG"
          />
          <Image
            className={styles.food_image}
            id="image"
            width={420}
            height={220}
            alt="table by the sea"
            src="/food3.JPG"
          />
        </div>
      </div>
      <div className={styles.grid_container_mobile}>
        <div className={styles.flex_container_left}>
          <Image
            className={styles.food_image}
            width={117}
            height={190}
            alt="eating outside"
            src="/food4.JPG"
          />
        </div>
        <div className={styles.flex_container_right}>
          <Image
            className={styles.food_image}
            width={190}
            height={120}
            alt="table with rose wine"
            src="/food1.JPG"
          />
          <Image
            className={styles.food_image}
            width={130}
            height={63}
            alt="table by the sea"
            src="/food3.JPG"
          />
        </div>
      </div>
      <div className={common.text_container}>
        <p>
          Το πιο φημισμένο προϊόν του νησιού είναι το συριανό λουκούμι. Η τέχνη
          της παρασκευής του έφτασε στη Σύρο με τους πρώτους πρόσφυγες από Χίο,
          ενώ το έτερο συριανό προϊόν των λουκουμοποιών είναι η χαλβαδόπιτα που
          παρασκευάζεται από θυμαρίσιο συριανό μέλι και φρεσκοψημένο αμύγδαλο. Η
          Σύρος φημίζεται και για τα τυροκομικά της, όπως το περίφημο τυρί Σαν
          Μιχάλη που ξεχωρίζει για τη μοναδική πικάντικη γεύση του. Στην οδό
          Χίου θα βρείτε αρκετά μαγαζιά για να προμηθευτείτε παραδοσιακά
          προϊόντα του νησιού.
        </p>
      </div>
      <div className={common.text_container} style={{textAlign: "left", alignItems: "start"}}>
        <p>
          Τρεις είναι οι επαρχίες (πρώην δήμοι) που συνθέτουν τα χωριά της Σύρου:
        </p>
        <ul>
          <li><strong>Ερμούπολη</strong>, που αποτελείται από την πρωτεύουσα και τα γύρω χωριά.</li>
          <li><strong>Άνω Σύρος</strong>, με την ομώνυμη ιστορική έδρα του δήμου και τα χωριά της Σύρου που ανήκουν στην Απάνω Μεριά του νησιού, στα βόρεια.</li>
          <li><strong>Ποσειδωνία</strong>, με τα χωριά της Σύρου που συγκεντρώνουν τη μεγαλύτερη τουριστική κίνηση στο νησί και βρίσκονται στο νότιο τμήμα.</li>
        </ul>
        <div style={{width: "50%", margin: "0 auto"}}>
          <Image
            width={562}
            height={659}
            alt="Map"
            layout="responsive"
            src="/map.jpg"
          />
        </div>
        <p>
          Παρακάτω θα βρείτε κάποιες προτάσεις για φαγητό και για ποτό, ανά περιοχή.
          Κάνοντας κλικ πάνω στα ονόματα θα βρεθείτε στην αντίστοιχη ιστοσελίδα του Trip Advisor.
        </p>
      </div>
      <div className={common.text_container} style={{textAlign: "left", alignItems: "start"}}>
        <h2>Ταβέρνες</h2>
        <ul>
          <li>
            ταβερνάκι στην παραλία{" "}
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g6212274-d8494672-Reviews-Achladi_Restaurant-Vari_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Αχλάδι
            </a>{" "}
            (θαλασσινά και ψαράκια)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d780363-Reviews-Allou_Yialou-Kini_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Αλλού Γυαλού
            </a>{" "}
            (Σερβίρει πρωτότυπα πιάτα σε μια μεγάλη βεράντα πάνω στη θάλασσα)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g1190346-d10538290-Reviews-Ono_Concept-Poseidonia_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Ono Concept
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g1925453-d3566771-Reviews-Dyo_Tzitzikia_Sta_Armyrikia-Kini_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Δυο Τζιτζίκια στ’ Αρμυρίκια
            </a>{" "}
            (παραθαλάσσιο ταβερνάκι με θαλασσινά)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d2465522-Reviews-To_Plakostroto-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Πλακόστρωτο
            </a>{" "}
            (στην Απάνω Μεριά που έχει θέα συγκλονιστική και έξοχα μαγειρευτά)
          </li>
          <li>
            ξενοδοχείο{" "}
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g15278394-d21131122-Reviews-Aristide_Hotel-Ermoupoli_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Aristide
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d4702189-Reviews-Mitsos_Taverna_Syros-Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              ο Μήτσος
            </a>
            (ξακουστός αν είσαι λάτρης του κρέατος)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g1184009-d2194506-Reviews-Iliovasilema-Galissas_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              ηλιοβασίλεμα
            </a>{" "}
            Σύρος
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g616163-d12572083-Reviews-Avant_Garden-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Avant Garden
            </a>{" "}
            (Έξοχη, δημιουργική κουζίνα σε μια όμορφη αυλή)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d6851874-Reviews-Mazi-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Mazi
            </a>{" "}
            (Η πιο ωραία αυλή του νησιού)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4507531-Reviews-Peri_Tinos-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Το Περί Τίνος
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g3581255-d8294485-Reviews-Apanohoritissa-Ano_Siros_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Η Απανοχωρίτισσα
            </a>
          </li>
        </ul>
        <h2>Brunch / καφέ</h2>
        <ul>
          <li>
            <a
              href="https://www.tripadvisor.fr/Restaurant_Review-g1190346-d8531435-Reviews-Perroquet_Tranquille-Poseidonia_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Le Perroquet Tranquille
            </a>{" "}
            (φτιάχνουν τα ωραιότερα κροκ μαντάμ και κροκ μεσιέ)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d20814947-Reviews-Armadillo_Coffee_brewery-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Armadillo
            </a>{" "}
            (το brunch στη Σύρο σε μία από τις πιο ψαγμένες εκδοχές του Okio
            Cafe Bar: το brunch στη Σύρο δίπλα στη θάλασσα)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4701521-Reviews-Kouchico-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Kouchico
            </a>{" "}
            (το cocktail-bar που ξέρει κι από brunch Jar: το πιο boho brunch
            στη Σύρο)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d17404805-Reviews-Plastico-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Plastico
            </a>{" "}
            (το κορυφαίο brunch στη Σύρο ξέρει (και) από τέχνη)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g3581255-d12437862-Reviews-Syrianon_Kafepoteio-Ano_Siros_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Συριανών Καφεποτείο
            </a>
          </li>
        </ul>
        <h2>Ποτό</h2>
        <ul>
          <li>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g3581255-d24928896-Reviews-Theosis-Ano_Siros_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Theosis
            </a>{" "}
            (Τα πιο έμπειρα κοκτέιλ στη Σύρο)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g189435-d17734098-Reviews-Ciel-Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Ciel
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d4701521-Reviews-Kouchico-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Kouchico
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Attraction_Review-g616163-d12854743-Reviews-Baba_Bar-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Baba bar
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g15278394-d23993350-Reviews-Barrio-Ermoupoli_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Barrio
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g15278394-d20935934-Reviews-Porte_Galleria_Del_Cocktail-Ermoupoli_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Porte Galleria del cocktail
            </a>
          </li>
        </ul>
        <h2>Γλυκό</h2>
        <ul>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d10814495-Reviews-M_I_Athymaritis-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Αθυμαρίτη
            </a>{" "}
            (Τα ροδίνια είναι τα συριανά, αριστοκρατικά αμυγδαλωτά, στου
            Αθυμαρίτη φτιάχνουν την απόλυτη εκδοχή)
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.gr/Restaurant_Review-g616163-d5030866-Reviews-Django_Gelato-Hermoupolis_Syros_Cyclades_South_Aegean.html"
              target="_blank"
            >
              Django Gelato
            </a>{" "}
            (Για φρέσκο, χειροποίητο παγωτό)
          </li>
        </ul>
        {/*<div className={styles.side_gif}>
          <Image
            style={{ marginTop: "100px" }}
            width={350}
            height={350}
            alt="Drink"
            layout="responsive"
            src="/drink.gif"
          />
              </div>*/}
      </div>
      <div className={common.text_container}>
        <p>
          Αξίζει να διαβάσετε και{" "}
          <a
            href="https://www.gastronomos.gr/exodos/syros-o-apolytos-odigos-me-ta-kalytera-estiatoria-mpar-zacharoplasteia/141524/?fbclid=IwAR0LcL8L1O4Qz3ItcVsbjDsE2qDmtE3IUExX4ThDz_VwTvyUQPFepgHnZfQ"
            target="_blank"
          >
            αυτό το άρθρο
          </a>{" "}
          από τον Γαστρονόμο.
        </p>
      </div>
    </>
  );
}
