import { Header } from "@/app/ui/header";
import styles from "./page.module.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Success() {
  return (
    <div className="text_container">
      <Header textAlign="center">Ευχαριστούμε για την απάντηση!</Header>
      <Link className={styles.return} href="/">
        <div className={styles.arrow}>
          <ArrowLeftIcon />
        </div>
        <div>Επιστροφή στην αρχική</div>
      </Link>
    </div>
  );
}
