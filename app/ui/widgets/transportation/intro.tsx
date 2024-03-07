import { Header } from "../../header";
import common from "../../sections/common.module.css";

export function Intro() {
  return (
    <div className={common.text_container}>
      <Header textAlign="center">Μετάβαση</Header>
      <p>
        Η πλεονεκτική θέση της Σύρου στην καρδιά των Κυκλάδων και η κοντινή της
        απόσταση από την Αθήνα δίνει τη δυνατότητα σε όλους τους ταξιδιώτες να
        μεταβούν στο νησί με όποιο τρόπο τους εξυπηρετεί περισσότερο, είτε
        αεροπορικώς είτε με πλοίο.
      </p>
    </div>
  );
}
