import { Header } from "@/app/ui/header";
import styles from "./page.module.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { localize } from "@/app/lib/localization";

export default function Success({ params }: { params: { lang: string } }) {
  const lang =
    params.lang === "en" || params.lang === "el" ? params.lang : "el";
  return (
    <div className="text_container">
      <Header textAlign="center">
        {localize(
          [
            { lang: "el", text: "Ευχαριστούμε για την απάντηση!" },
            { lang: "en", text: "Thanks for replying!" },
          ],
          lang
        )}
      </Header>
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
