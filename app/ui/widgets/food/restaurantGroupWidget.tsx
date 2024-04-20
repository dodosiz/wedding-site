import { RestaurantGroup } from "@/app/data/food";
import { LocationWidget } from "./locationWidget";
import styles from "./restaurantGroupWidget.module.css";
import { SupportedLang, localize } from "@/app/lib/localization";

interface RestaurantGroupProps {
  group: RestaurantGroup;
  lang: SupportedLang;
}

export function RestaurantGroupWidget({ group, lang }: RestaurantGroupProps) {
  return (
    <>
      <h2 className={styles.location_title}>
        <strong>{localize(group.name, lang)}</strong>
      </h2>
      {group.locations.map((location, index) => (
        <LocationWidget
          key={`location-${index}`}
          location={location}
          lang={lang}
        />
      ))}
    </>
  );
}
