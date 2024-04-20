"use client";
import styles from "./foodSection.module.css";
import { Header } from "../header";
import { RestaurantGroup } from "@/app/data/food";
import { RestaurantGroupWidget } from "../widgets/food/restaurantGroupWidget";
import { GeneralIntro } from "../widgets/food/generalIntro";
import { GeographicalIntro } from "../widgets/food/geographicalIntro";
import { ArticleReference } from "../widgets/food/articleReference";
import { SupportedLang, localize } from "@/app/lib/localization";

interface FoodSectionProps {
  groups: RestaurantGroup[];
  lang: SupportedLang;
}

export function FoodSection({ groups, lang }: FoodSectionProps) {
  return (
    <>
      <Header className={styles.food_header} textAlign="center">
        {localize(
          [
            { lang: "el", text: "Γευστικές περιηγήσεις" },
            { lang: "en", text: "Tasty tours" },
          ],
          lang
        )}
      </Header>
      <GeneralIntro lang={lang} />
      <GeographicalIntro lang={lang} />
      <div
        className="text_container"
        style={{ textAlign: "left", alignItems: "start" }}
      >
        {groups.map((group, index) => (
          <RestaurantGroupWidget
            key={`restaurant-group-${index}`}
            group={group}
            lang={lang}
          />
        ))}
      </div>
      <ArticleReference lang={lang} />
    </>
  );
}
