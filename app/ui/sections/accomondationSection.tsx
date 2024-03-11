import { Header } from "../header";
import styles from "./accomondationSection.module.css";
import { AccomondationGroup } from "@/app/data/accomondation";
import { AccomondationGroupWidget } from "../widgets/accomondation/accomondationGroupWidget";
import { AccomondationHeroImage } from "../widgets/accomondation/accomondationHeroImage";

interface AccomondationSectionProps {
  groups: AccomondationGroup[];
}

export function AccomondationSection({ groups }: AccomondationSectionProps) {
  return (
    <div className={styles.location_section}>
      <Header className={styles.header_desktop} textAlign="center">
        Διαμονή
      </Header>
      <AccomondationHeroImage />
      <div className={styles.location_text}>
        <p>
          Παρακάτω παρουσιάζονται μερικά από τα δημοφιλή ξενοδοχεία στην Σύρο,
          καθώς και μερικά καταλύματα στην περιοχή της Ερμούπολης, προσφέροντας
          μια ευρεία γκάμα τιμών <br />
          για κάθε προϋπολογισμό.
        </p>
        <div className={styles.hotel_grid}>
          {groups.map((group, index) => (
            <AccomondationGroupWidget group={group} key={`group-${index}`} />
          ))}
          <div></div>
        </div>
        <p className={styles.hint}>
          Θα θέλαμε να σας παρακαλέσουμε να κλείσετε τα καταλύματά σας στο νησί όσο πιο νωρίς γίνεται λόγω της υψηλής ζήτησης.
        </p>
      </div>
    </div>
  );
}
