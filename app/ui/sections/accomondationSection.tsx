import { Header } from "../header";
import styles from "./accomondationSection.module.css";
import { AccomondationGroup } from "@/app/data/accomondation";
import { AccomondationGroupWidget } from "../widgets/accomondation/accomondationGroupWidget";
import { AccomondationHeroImage } from "../widgets/accomondation/accomondationHeroImage";
import { SupportedLang, localize } from "@/app/lib/localization";

interface AccomondationSectionProps {
  groups: AccomondationGroup[];
  lang: SupportedLang;
}

export function AccomondationSection({
  groups,
  lang,
}: AccomondationSectionProps) {
  return (
    <div className={styles.location_section}>
      <Header className={styles.header_desktop} textAlign="center">
        {localize(
          [
            { lang: "el", text: "Διαμονή" },
            { lang: "en", text: "Accomondation" },
          ],
          lang
        )}
      </Header>
      <AccomondationHeroImage />
      <div className={styles.location_text}>
        <p>
          {localize(
            [
              {
                lang: "el",
                text: "Παρακάτω παρουσιάζονται μερικά από τα δημοφιλή ξενοδοχεία στην Σύρο, καθώς και μερικά καταλύματα στην περιοχή της Ερμούπολης, προσφέροντας μια ευρεία γκάμα τιμών ",
              },
              {
                lang: "en",
                text: "Below are some of the popular hotels in Syros, as well as some Airbnbs in the Ermoupoli area, offering a wide range of prices ",
              },
            ],
            lang
          )}
          <br />
          {localize(
            [
              { lang: "el", text: "για κάθε προϋπολογισμό." },
              { lang: "en", text: "to suit every budget." },
            ],
            lang
          )}
        </p>
        <div className={styles.hotel_grid}>
          {groups.map((group, index) => (
            <AccomondationGroupWidget
              group={group}
              key={`group-${index}`}
              lang={lang}
            />
          ))}
          <div></div>
        </div>
        <p className={styles.hint}>
          {localize(
            [
              {
                lang: "el",
                text: "Θα θέλαμε να σας παρακαλέσουμε να κλείσετε τα καταλύματά σας στο νησί όσο πιο νωρίς γίνεται λόγω της υψηλής ζήτησης.",
              },
              {
                lang: "en",
                text: "We kindly ask you to book your accommodations on the island as early as possible due to high demand.",
              },
            ],
            lang
          )}
        </p>
      </div>
    </div>
  );
}
