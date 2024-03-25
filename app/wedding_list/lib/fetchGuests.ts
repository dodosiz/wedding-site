import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export interface Guest {
  id: string;
  name: string;
  surname: string;
  will_attend: string;
  number_of_people: number;
  car: boolean;
}

export async function fetchGuests() {
  noStore();
  const data =
    await sql<Guest>`SELECT id, name, surname, will_attend, number_of_people, car FROM guests;`;
  return data.rows;
}
