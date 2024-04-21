"use server";

import { SupportedLang } from "@/app/lib/localization";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

const guestSchema = z.object({
  name: z.string(),
  surname: z.string(),
  car: z.boolean(),
  will_attend: z.string(),
  number_of_people: z.coerce.number(),
});

export async function reply(formData: FormData, lang: SupportedLang) {
  const { car, name, surname, will_attend, number_of_people } =
    guestSchema.parse({
      name: formData.get("name"),
      surname: formData.get("surname"),
      car: formData.get("car") == "on",
      will_attend: formData.get("will_attend"),
      number_of_people: formData.get("number_of_people"),
    });
  await sql`
    INSERT INTO guests (name, surname, car, will_attend, number_of_people)
    VALUES (${name}, ${surname}, ${car}, ${will_attend}, ${number_of_people})
  `;
  redirect(`/${lang}/rsvp/success`);
}
