import styles from "./getThereSection.module.css"
import common from "./common.module.css";
import { Header } from "../header";

export function GetThereSection() {
    return <>
        <div className={common.text_container}>
            <Header textAlign="center">Μετάβαση</Header>
            <p>
                Η πλεονεκτική θέση της Σύρου στην καρδιά των Κυκλάδων και η κοντινή της απόσταση
                από την Αθήνα δίνει τη δυνατότητα σε όλους τους ταξιδιώτες να μεταβούν στο νησί με
                όποιο τρόπο τους εξυπηρετεί περισσότερο, είτε αεροπορικώς είτε με πλοίο.
            </p>
        </div>
        <div className={styles.grid_container}>
            <div>
                <h2 className={styles.text_center}>ΑΚΤΟΠΛΟΙΚΗ ΜΕΤΑΚΙΝΗΣΗ</h2>
                <p>
                    Η σύνδεση είναι καθημερινή με δρομολόγια από και προς τα λιμάνια: Πειραιά,
                    (διάρκεια: 4 ώρες με συμβατικό πλοίο της γραμμής ή 2,5 ώρες με high-speed),
                    Ραφήνας (διάρκεια: 1,5 ώρα), Κυκλάδων, Δωδεκανήσων, Βορείου Αιγαίου, Καβάλας.
                </p>
                <p>
                    Ταξιδιωτικά πρακτορεία για περισσότερες πληροφορίες: 
                </p>
                <p><b>Hellenic Seaways:</b> +30 210 4199000</p>
                <p><b>Blue Star Ferries:</b> +30 210 8919800</p>
            </div>
            <div>
                <h2 className={styles.text_center}>ΑΕΡΟΠΟΡΙΚΩΣ</h2>
                <p>
                    Σε καθημερινή βάση εκτελούνται πτήσεις από Αθήνα προς Σύρο και αντίστροφα, με την πτήση να διαρκεί μόλις 25 λεπτά.
                </p>
                <p><b>Αεροδρομίο Σύρου:</b> +30 22810 81900</p>
                <p><b>Αεροδρόμιο Ελευθέριος Βενιζέλος:</b> +30 210 3530000</p>
                <p><b>Sky Express:</b> 801 1128288</p>
                <p><b>Astra Airlines:</b> 801 7007466</p>
            </div>
        </div>
    </>
}