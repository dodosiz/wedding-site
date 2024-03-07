import Image from "next/image";
import styles from "./generalIntro.module.css";

export function GeneralIntro() {
  return (
    <div className="text_container">
      <Image
        className={styles.food_image}
        width={1280}
        height={1214}
        layout="responsive"
        alt="food options in Syros"
        src="/food.png"
      />
      <p>
        Το πιο φημισμένο προϊόν του νησιού είναι το συριανό λουκούμι. Η τέχνη
        της παρασκευής του έφτασε στη Σύρο με τους πρώτους πρόσφυγες από Χίο,
        ενώ το έτερο συριανό προϊόν των λουκουμοποιών είναι η χαλβαδόπιτα που
        παρασκευάζεται από θυμαρίσιο συριανό μέλι και φρεσκοψημένο αμύγδαλο. Η
        Σύρος φημίζεται και για τα τυροκομικά της, όπως το περίφημο τυρί Σαν
        Μιχάλη που ξεχωρίζει για τη μοναδική πικάντικη γεύση του. Στην οδό Χίου
        θα βρείτε αρκετά μαγαζιά για να προμηθευτείτε παραδοσιακά προϊόντα του
        νησιού.
      </p>
    </div>
  );
}
