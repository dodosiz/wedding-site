import Image from "next/image";
import styles from "./foodSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";

export function FoodSection() {
    return <>
    <div className={styles.grid_container}>
        <div className={styles.flex_container_left}>
            <Image className={styles.food_image} width={380} height={600} alt="eating outside" src="/food4.jpg" />
        </div>
        <div className={styles.flex_container_right}>
            <Image className={styles.food_image} width={600} height={390} alt="table with rose wine" src="/food1.JPG" />
            <Image className={styles.food_image} width={420} height={220} alt="table by the sea" src="/food3.JPG" />
        </div>
    </div>
    <div className={common.text_container}>
        <Header>Γευστικές περιηγήσεις</Header>
        <p>
        Χαρακτηριστικό της Σύρου, όσον αφορά στο φαγητό, είναι το πικάντικο τυρί Σα Μιχάλη,
        που παράγεται κυρίως στο ομώνυμο χωριό της Άνω Σύρου , στη βόρεια πλευρά του νησιού.
        Αν κάνετε τη βόλτα σας στα μικρά, παραδοσιακά, ορεινά χωριουδάκια της περιοχής,
        θα ανακαλύψετε μέρη όπου θα δοκιμάσετε πεντανόστιμο φαγητό!
        </p>
    </div>
    <div className={styles.suggestions_grid_container}>
        <div>
            <h2>Ταβέρνες</h2>
            <ul>
                <li>ταβερνάκι στην παραλία <b>Αχλάδι</b> (θαλασσινά και ψαράκια)</li>
                <li>Αλλού Γυαλού</li>
                <li>Ono Concept</li>
                <li>Δυο Τζιτζίκια στ’ Αρμυρίκια (παραθαλάσσιο ταβερνάκι με θαλασσινά)</li>
                <li>Πλακόστρωτο (στην Απάνω Μεριά που έχει θέα συγκλονιστική και έξοχα μαγειρευτά)</li>
                <li>ξενοδοχείο Aristide</li>
                <li>ο Μήτσος</li>
                <li>ηλιοβασίλεμα Σύρος</li>
            </ul>
            <h2>Brunch</h2>
            <ul>
                <li>Le Perroquet Tranquille (φτιάχνουν τα ωραιότερα κροκ μαντάμ και κροκ μεσιέ)</li>
            </ul>
            <h2>Ποτό</h2>
            <ul>
                <li>Theosis (Τα πιο έμπειρα κοκτέιλ στη Σύρο)</li>
            </ul>
            <h2>Γλυκό</h2>
            <ul>
                <li>Αθυμαρίτη (Τα ροδίνια είναι τα συριανά, αριστοκρατικά αμυγδαλωτά, στου Αθυμαρίτη φτιάχνουν την απόλυτη εκδοχή)</li>
            </ul>
        </div>
        <div className={styles.side_gif}>
            <Image style={{marginTop: "100px"}} width={350} height={350} alt="Drink" src="/drink.gif" />
        </div>
    </div>
    </>
}