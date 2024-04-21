"use client";
import { TextInput } from "./textInput";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { reply } from "./lib/reply";
import { Radio } from "./radio";
import { useState } from "react";
import { SupportedLang, localize } from "@/app/lib/localization";

export function RsvpForm({ lang }: { lang: SupportedLang }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [car, setCar] = useState(false);
  const [willAttend, setWillAttend] = useState("");
  function handleSubmit(fd: FormData) {
    reply(fd, lang);
  }
  return (
    <form action={handleSubmit}>
      <TextInput
        required
        label={localize(
          [
            { lang: "el", text: "Όνομα" },
            { lang: "en", text: "Name" },
          ],
          lang
        )}
        name="name"
        type="text"
        value={name}
        onChange={setName}
      />
      <TextInput
        required
        label={localize(
          [
            { lang: "el", text: "Επίθετο" },
            { lang: "en", text: "Surname" },
          ],
          lang
        )}
        name="surname"
        type="text"
        value={surname}
        onChange={setSurname}
      />
      <Checkbox
        label={localize(
          [
            { lang: "el", text: "Θα έρθω με Ι.Χ." },
            { lang: "en", text: "I will come by car" },
          ],
          lang
        )}
        name="car"
        value={car}
        onChange={setCar}
      />
      <Radio
        values={[
          {
            value: "yes",
            label: localize(
              [
                { lang: "el", text: "Θα παρευρεθώ" },
                { lang: "en", text: "Will attend" },
              ],
              lang
            ),
          },
          {
            value: "no",
            label: localize(
              [
                { lang: "el", text: "Δεν θα παρευρεθώ" },
                { lang: "en", text: "Will not attend" },
              ],
              lang
            ),
          },
        ]}
        onChange={setWillAttend}
        name="will_attend"
        required
      />
      <TextInput
        label={localize(
          [
            { lang: "el", text: "Αριθμός επιπλέον ατόμων" },
            { lang: "en", text: "Number of additional persons" },
          ],
          lang
        )}
        name="number_of_people"
        required={willAttend === "yes"}
        disabled={willAttend !== "yes"}
        type="number"
        value={numberOfPeople}
        onChange={setNumberOfPeople}
      />
      <Button
        name="send"
        label={localize(
          [
            { lang: "el", text: "Αποστολή" },
            { lang: "en", text: "Submit" },
          ],
          lang
        )}
      />
    </form>
  );
}
