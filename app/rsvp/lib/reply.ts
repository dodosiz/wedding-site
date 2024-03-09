"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

const guestSchema = z.object({
  name: z.string(),
  surname: z.string(),
  car: z.boolean(),
  will_attend: z.string(),
});

export async function reply(formData: FormData) {
  const { car, name, surname, will_attend } = guestSchema.parse({
    name: formData.get("name"),
    surname: formData.get("surname"),
    car: formData.get("car") == "on",
    will_attend: formData.get("will_attend"),
  });
  await sql`
    INSERT INTO guests (name, surname, car, will_attend)
    VALUES (${name}, ${surname}, ${car}, ${will_attend})
  `;
  redirect("/rsvp/success");
}
