interface Restaurant {
  link: string;
  name: string;
  description: string;
}

interface Location {
  name: string;
  restaurants: Restaurant[];
}

export interface RestaurantGroup {
  name: string;
  locations: Location[];
}

export const FOOD_GROUPS: RestaurantGroup[] = [];
