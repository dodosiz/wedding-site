import Image from "next/image";
import { Header } from "../header";
import styles from "./accomondationSection.module.css";
import { AccomondationGroup } from "@/app/data/accomondation";

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
            <AccomondationGroup group={group} key={`group-${index}`} />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

interface AccomondationGroupProps {
  group: AccomondationGroup;
}

function AccomondationGroup({ group }: AccomondationGroupProps) {
  return (
    <>
      <div></div>
      <div>
        <h2>{group.name}</h2>
        <ul>
          {group.items.map((item, index) => {
            return (
              <li key={`item-${index}`}>
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function AccomondationHeroImage() {
  return (
    <>
      <Image
        src="/accomondation/accom_desktop.jpg"
        className={styles.image_desktop}
        width={2719}
        height={1597}
        alt="accomondation"
        layout="responsive"
      />
      <Image
        src="/accomondation/accom_mobile.jpg"
        className={styles.image_mobile}
        width={1125}
        height={1224}
        alt="accomondation"
        layout="responsive"
      />
    </>
  );
}
