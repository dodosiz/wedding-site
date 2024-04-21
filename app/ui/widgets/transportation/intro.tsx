import { SupportedLang, localize } from "@/app/lib/localization";
import { Header } from "../../header";

export function Intro({ lang }: { lang: SupportedLang }) {
  return (
    <div className="text_container">
      <Header textAlign="center">
        {localize(
          [
            { lang: "el", text: "Μετάβαση" },
            { lang: "en", text: "Transition" },
          ],
          lang
        )}
      </Header>
      <p>
        {localize(
          [
            {
              lang: "el",
              text: "Η πλεονεκτική θέση της Σύρου στην καρδιά των Κυκλάδων και η κοντινή της απόσταση από την Αθήνα δίνει τη δυνατότητα σε όλους τους ταξιδιώτες να μεταβούν στο νησί με όποιο τρόπο τους εξυπηρετεί περισσότερο, είτε αεροπορικώς είτε με πλοίο.",
            },
            {
              lang: "en",
              text: "The advantageous location of Syros in the heart of the Cyclades and its proximity to Athens gives all travellers the opportunity to travel to the island in whatever way suits them best, either by air or by boat.",
            },
          ],
          lang
        )}
      </p>
    </div>
  );
}
