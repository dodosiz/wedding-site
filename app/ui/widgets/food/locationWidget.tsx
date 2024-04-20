import { Location } from "@/app/data/food";
import styles from "./locationWidget.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

interface LocationProps {
  location: Location;
  lang: SupportedLang;
}

export function LocationWidget({ location, lang }: LocationProps) {
  return (
    <>
      <h3 className={styles.location_header}>
        {localize(location.name, lang)}
      </h3>
      <ul style={{ marginTop: 0, marginBottom: 5 }}>
        {location.restaurants.map((restaurant, index) => {
          return (
            <li key={`restaurant-${index}`}>
              <a href={restaurant.link} target="_blank">
                {localize(restaurant.name, lang)}
              </a>
              {restaurant.description ? " " : ""}
              {restaurant.description
                ? localize(restaurant.description, lang)
                : ""}
            </li>
          );
        })}
      </ul>
    </>
  );
}
