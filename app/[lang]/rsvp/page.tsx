import { RsvpForm } from "./rsvpForm";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/app/ui/header";
import { localize } from "@/app/lib/localization";

export default function RsvpPage({ params }: { params: { lang: string } }) {
  const lang =
    params.lang === "en" || params.lang === "el" ? params.lang : "el";
  return (
    <div className="text_container">
      <Header textAlign="center">RSVP</Header>
      <p className={styles.paragraph}>
        {localize(
          [
            {
              lang: "el",
              text: "Θα χαρούμε πολύ να μας πείτε εάν θα παρευρεθείτε στον γάμο μας, καθώς και εάν θα έρθετε με αμάξι στο νησί και πόσα άτομα θα φέρετε μαζί σας.",
            },
            {
              lang: "en",
              text: "We would love to hear from you if you will be attending our wedding, as well as if you will be driving to the island and how many people you will be bringing with you.",
            },
          ],
          lang
        )}
      </p>
      <p className={styles.paragraph}>
        {localize(
          [
            {
              lang: "el",
              text: "Παρακαλούμε επιβεβαιώστε την παρουσία σας μέχρι την",
            },
            { lang: "en", text: "Please confirm your attendance by" },
          ],
          lang
        )}{" "}
        <strong>
          {localize(
            [
              { lang: "el", text: "15η Μαΐου" },
              { lang: "en", text: "15th of Mai" },
            ],
            lang
          )}
        </strong>
        {localize(
          [
            {
              lang: "el",
              text: " για να μας βοηθήσετε να οργανώσουμε την εκδήλωση μας.",
            },
            { lang: "en", text: " to help us organize our event." },
          ],
          lang
        )}
      </p>
      <RsvpForm lang={lang} />
      <Link className={styles.return} href={`/${lang}`}>
        <div className={styles.arrow}>
          <ArrowLeftIcon />
        </div>
        <div>
          {localize(
            [
              { lang: "el", text: "Επιστροφή στην αρχική" },
              { lang: "en", text: "Back to home" },
            ],
            lang
          )}
        </div>
      </Link>
    </div>
  );
}
