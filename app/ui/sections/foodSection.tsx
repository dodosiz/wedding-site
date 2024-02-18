import Image from "next/image";
import styles from "./foodSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";

export function FoodSection() {
  return (
    <>
      <div className={styles.grid_container}>
        <div className={styles.flex_container_left}>
          <Image
            className={styles.food_image}
            width={380}
            height={600}
            alt="eating outside"
            src="/food4.jpg"
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
            width={420}
            height={220}
            alt="table by the sea"
            src="/food3.JPG"
          />
        </div>
      </div>
      <div className={common.text_container}>
        <Header>Γευστικές περιηγήσεις</Header>
        <p>
          Χαρακτηριστικό της Σύρου, όσον αφορά στο φαγητό, είναι το πικάντικο
          τυρί Σα Μιχάλη, που παράγεται κυρίως στο ομώνυμο χωριό της Άνω Σύρου ,
          στη βόρεια πλευρά του νησιού. Αν κάνετε τη βόλτα σας στα μικρά,
          παραδοσιακά, ορεινά χωριουδάκια της περιοχής, θα ανακαλύψετε μέρη όπου
          θα δοκιμάσετε πεντανόστιμο φαγητό!
        </p>
      </div>
      <div className={styles.suggestions_grid_container}>
        <div>
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
              </a>
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
          </ul>
          <h2>Brunch</h2>
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
          </ul>
        </div>
        <div className={styles.side_gif}>
          <Image
            style={{ marginTop: "100px" }}
            width={350}
            height={350}
            alt="Drink"
            src="/drink.gif"
          />
        </div>
      </div>
    </>
  );
}
