import Image from "next/image";
import styles from "./geographicalIntro.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

export function GeographicalIntro({ lang }: { lang: SupportedLang }) {
  return (
    <div
      className="text_container"
      style={{ textAlign: "left", alignItems: "start" }}
    >
      <p>
        {localize(
          [
            {
              lang: "el",
              text: "Τρεις είναι οι επαρχίες (πρώην δήμοι) που συνθέτουν τα χωριά της Σύρου:",
            },
            {
              lang: "en",
              text: "There are three provinces (former municipalities) that make up the villages of Syros:",
            },
          ],
          lang
        )}
      </p>
      <ul>
        <li>
          <strong>
            {localize(
              [
                { lang: "el", text: "Ερμούπολη" },
                { lang: "en", text: "Ermupoli" },
              ],
              lang
            )}
          </strong>
          {localize(
            [
              {
                lang: "el",
                text: ", που αποτελείται από την πρωτεύουσα και τα γύρω χωριά.",
              },
              {
                lang: "en",
                text: ", consisting of the capital and the surrounding villages.",
              },
            ],
            lang
          )}
        </li>
        <li>
          <strong>
            {localize(
              [
                { lang: "el", text: "Άνω Σύρος" },
                { lang: "en", text: "Ano Syros" },
              ],
              lang
            )}
          </strong>
          {localize(
            [
              {
                lang: "el",
                text: ", με την ομώνυμη ιστορική έδρα του δήμου και τα χωριά της Σύρου που ανήκουν στην Απάνω Μεριά του νησιού, στα βόρεια.",
              },
              {
                lang: "en",
                text: ", with the homonymous historical seat of the municipality and the villages of Syros belonging to the northern part of the island.",
              },
            ],
            lang
          )}
        </li>
        <li>
          <strong>
            {localize(
              [
                { lang: "el", text: "Ποσειδωνία" },
                { lang: "en", text: "Poseidonia" },
              ],
              lang
            )}
          </strong>
          {localize(
            [
              {
                lang: "el",
                text: ", με τα χωριά της Σύρου που συγκεντρώνουν τη μεγαλύτερη τουριστική κίνηση στο νησί και βρίσκονται στο νότιο τμήμα.",
              },
              {
                lang: "en",
                text: ", with the villages of Syros that attract the most tourist traffic on the island and are located in the southern part.",
              },
            ],
            lang
          )}
        </li>
      </ul>
      <div className={styles.image_map}>
        <Image
          width={562}
          height={659}
          alt="Map"
          layout="responsive"
          src="/map.jpg"
        />
      </div>
      <p>
        {localize(
          [
            {
              lang: "el",
              text: "Παρακάτω θα βρείτε κάποιες προτάσεις για φαγητό και για ποτό, ανά περιοχή. Κάνοντας κλικ πάνω στα ονόματα θα βρεθείτε στην αντίστοιχη ιστοσελίδα του Trip Advisor.",
            },
            {
              lang: "en",
              text: "Below you will find some suggestions for food and drink, by region. Clicking on the names will take you to the corresponding Trip Advisor website.",
            },
          ],
          lang
        )}
      </p>
    </div>
  );
}
