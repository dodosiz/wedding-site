"use client";
import styles from "./foodSection.module.css";
import { Header } from "../header";
import { RestaurantGroup } from "@/app/data/food";
import { RestaurantGroupWidget } from "../widgets/food/restaurantGroupWidget";
import { GeneralIntro } from "../widgets/food/generalIntro";
import { GeographicalIntro } from "../widgets/food/geographicalIntro";
import { ArticleReference } from "../widgets/food/articleReference";

interface FoodSectionProps {
  groups: RestaurantGroup[];
}

export function FoodSection({ groups }: FoodSectionProps) {
  return (
    <>
      <Header className={styles.food_header} textAlign="center">
        Γευστικές περιηγήσεις
      </Header>
      <GeneralIntro />
      <GeographicalIntro />
      <div
        className="text_container"
        style={{ textAlign: "left", alignItems: "start" }}
      >
        {groups.map((group, index) => (
          <RestaurantGroupWidget
            key={`restaurant-group-${index}`}
            group={group}
          />
        ))}
        {/*<div className={styles.side_gif}>
          <Image
            style={{ marginTop: "100px" }}
            width={350}
            height={350}
            alt="Drink"
            layout="responsive"
            src="/drink.gif"
          />
              </div>*/}
      </div>
      <ArticleReference />
    </>
  );
}
