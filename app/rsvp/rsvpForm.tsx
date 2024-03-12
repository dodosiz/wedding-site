"use client";
import { TextInput } from "./textInput";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { reply } from "./lib/reply";
import { Radio } from "./radio";
import { useState } from "react";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [car, setCar] = useState(false);
  const [willAttend, setWillAttend] = useState("")
  return (
    <form action={reply}>
      <TextInput required label="Όνομα" name="name" type="text" value={name} onChange={setName} />
      <TextInput required label="Επίθετο" name="surname" type="text" value={surname} onChange={setSurname} />
      <Checkbox label="Θα έρθω με Ι.Χ." name="car" value={car} onChange={setCar} />
      <Radio
        values={[
          {
            value: "yes",
            label: "Θα παρευρεθώ",
          },
          {
            value: "no",
            label: "Δεν θα παρευρεθώ",
          },
        ]}
        onChange={setWillAttend}
        name="will_attend"
        required
      />
      <TextInput
        label="Αριθμός ατόμων"
        name="number_of_people"
        required={willAttend === "yes"}
        disabled={willAttend !== "yes"}
        type="number"
        value={numberOfPeople}
        onChange={setNumberOfPeople} 
      />
      <Button name="send" label="Αποστολή" />
    </form>
  );
}
