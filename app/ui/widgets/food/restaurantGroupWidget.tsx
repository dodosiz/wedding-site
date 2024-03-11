import { RestaurantGroup } from "@/app/data/food";
import { LocationWidget } from "./locationWidget";
import styles from "./restaurantGroupWidget.module.css";

interface RestaurantGroupProps {
  group: RestaurantGroup;
}

export function RestaurantGroupWidget({ group }: RestaurantGroupProps) {
  return (
    <>
      <h2 className={styles.location_title}>
        <strong>{group.name}</strong>
      </h2>
      {group.locations.map((location, index) => (
        <LocationWidget key={`location-${index}`} location={location} />
      ))}
    </>
  );
}
