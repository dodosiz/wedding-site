import { Location } from "@/app/data/food";
import styles from "./locationWidget.module.css";

interface LocationProps {
  location: Location;
}

export function LocationWidget({ location }: LocationProps) {
  return (
    <>
      <h3 className={styles.location_header}>{location.name}</h3>
      <ul style={{marginTop: 0, marginBottom: 5}}>
        {location.restaurants.map((restaurant, index) => {
          return (
            <li key={`restaurant-${index}`}>
              <a href={restaurant.link} target="_blank">
                {restaurant.name}
              </a>
              {restaurant.description ? " " : ""}
              {restaurant.description}
            </li>
          );
        })}
      </ul>
    </>
  );
}
