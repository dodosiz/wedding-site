import Image from "next/image";
import styles from "./generalIntro.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

export function GeneralIntro({ lang }: { lang: SupportedLang }) {
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
        {localize(
          [
            {
              lang: "el",
              text: "Το πιο φημισμένο προϊόν του νησιού είναι το συριανό λουκούμι. Η τέχνη της παρασκευής του έφτασε στη Σύρο με τους πρώτους πρόσφυγες από Χίο, ενώ το έτερο συριανό προϊόν των λουκουμοποιών είναι η χαλβαδόπιτα που παρασκευάζεται από θυμαρίσιο συριανό μέλι και φρεσκοψημένο αμύγδαλο. Η Σύρος φημίζεται και για τα τυροκομικά της, όπως το περίφημο τυρί Σαν Μιχάλη που ξεχωρίζει για τη μοναδική πικάντικη γεύση του. Στην οδό Χίου θα βρείτε αρκετά μαγαζιά για να προμηθευτείτε παραδοσιακά προϊόντα του νησιού.",
            },
            {
              lang: "en",
              text: "The most famous product of the island is the Syrian loukoumi. The art of its preparation arrived in Syros with the first refugees from Chios, while the other Syrian product of the loukoumo-makers is the halvadopita, made from Syrian thyme honey and freshly baked almonds. Syros is also famous for its cheese products, such as the famous San Michalis cheese, which stands out for its unique spicy taste. In Chios Street you will find several shops to buy traditional products of the island.",
            },
          ],
          lang
        )}
      </p>
    </div>
  );
}
