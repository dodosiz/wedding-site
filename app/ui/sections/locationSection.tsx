import Image from "next/image";
import styles from "./locationSection.module.css";

export function LocationSection() {
  return (
    <div className={styles.location_container}>
      <h1>{"Η Τοποθεσία"}</h1>
      <p>
        {
          "Το μυστήριο θα γίνει στην εκκλησία του αγίου Νικολάου στην Ερμούπολη Σύρου. Η ώρα "
        }
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NmY0bGxxNjRpajQxOGM0b21nZjlobW5lY24gdC52LmFzdmVzdG9wb3Vsb3NAbQ&amp;tmsrc=t.v.asvestopoulos%40gmail.com"
        >
          18:00 στις 28 Ιουλίου 2024.
        </a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.600254986229!2d24.942546374321147!3d37.44654713100191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2885351f156af%3A0xbd89e13d137b3ba0!2sChurch%20of%20Agios%20Nikolaos!5e0!3m2!1sen!2sgr!4v1707946225081!5m2!1sen!2sgr"
        width="300"
        height="225"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>
        {
          "Στη συνέχεια θα κατευθυνθούμε λίγο πιο κάτω στο παραθαλάσιο μαγαζί με το όνομα Ciel. Εκεί θα απολαύσουμε το μενού που μας ετοίμασε το Catering Ζοζεφίνος, πάντα με συνοδεία τα δροσιστικά Coctail του Ciel Bar."
        }
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.5977950407655!2d24.945190874321163!3d37.44660523099872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2894b2a67e22b%3A0x13fe03c9227bbb69!2sCiel%20Syros!5e0!3m2!1sen!2sgr!4v1707946625909!5m2!1sen!2sgr"
        width="300"
        height="225"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Image width={273} height={200} alt="Garidas" src="/garidas.gif" />
    </div>
  );
}
