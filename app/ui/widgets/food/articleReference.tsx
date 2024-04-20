import { SupportedLang, localize } from "@/app/lib/localization";

export function ArticleReference({ lang }: { lang: SupportedLang }) {
  return (
    <div className="text_container">
      <p>
        {localize(
          [
            { lang: "el", text: "Αξίζει να διαβάσετε και" },
            { lang: "en", text: "It's worth also reading" },
          ],
          lang
        )}{" "}
        <a
          href="https://www.gastronomos.gr/exodos/syros-o-apolytos-odigos-me-ta-kalytera-estiatoria-mpar-zacharoplasteia/141524/?fbclid=IwAR0LcL8L1O4Qz3ItcVsbjDsE2qDmtE3IUExX4ThDz_VwTvyUQPFepgHnZfQ"
          target="_blank"
        >
          {localize(
            [
              { lang: "el", text: "αυτό το άρθρο" },
              { lang: "en", text: "this article" },
            ],
            lang
          )}
        </a>{" "}
        {localize(
          [
            { lang: "el", text: "από τον Γαστρονόμο." },
            { lang: "en", text: "from Gastronomos." },
          ],
          lang
        )}
      </p>
    </div>
  );
}
