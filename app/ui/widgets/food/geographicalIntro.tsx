import Image from "next/image";
import common from "../../sections/common.module.css";
import styles from "./geographicalIntro.module.css";

export function GeographicalIntro() {
  return (
    <div
      className={common.text_container}
      style={{ textAlign: "left", alignItems: "start" }}
    >
      <p>
        Τρεις είναι οι επαρχίες (πρώην δήμοι) που συνθέτουν τα χωριά της Σύρου:
      </p>
      <ul>
        <li>
          <strong>Ερμούπολη</strong>, που αποτελείται από την πρωτεύουσα και τα
          γύρω χωριά.
        </li>
        <li>
          <strong>Άνω Σύρος</strong>, με την ομώνυμη ιστορική έδρα του δήμου και
          τα χωριά της Σύρου που ανήκουν στην Απάνω Μεριά του νησιού, στα
          βόρεια.
        </li>
        <li>
          <strong>Ποσειδωνία</strong>, με τα χωριά της Σύρου που συγκεντρώνουν
          τη μεγαλύτερη τουριστική κίνηση στο νησί και βρίσκονται στο νότιο
          τμήμα.
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
        Παρακάτω θα βρείτε κάποιες προτάσεις για φαγητό και για ποτό, ανά
        περιοχή. Κάνοντας κλικ πάνω στα ονόματα θα βρεθείτε στην αντίστοιχη
        ιστοσελίδα του Trip Advisor.
      </p>
    </div>
  );
}
