import { Header } from "../ui/header";
import { RsvpForm } from "./rsvpForm";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import styles from "./page.module.css";
import Link from "next/link";

export default function RsvpPage() {
  return (
    <div className="text_container">
      <Header textAlign="center">RSVP</Header>
      <p className={styles.paragraph}>
        Θα χαρούμε πολύ να μας πείτε εάν θα παρευρεθείτε στον γάμο μας, καθώς
        και εάν θα έρθετε με αμάξι στο νησί.
      </p>
      <RsvpForm />
      <Link className={styles.return} href="/">
        <div className={styles.arrow}>
          <ArrowLeftIcon />
        </div>
        <div>Επιστροφή στην αρχική</div>
      </Link>
    </div>
  );
}
