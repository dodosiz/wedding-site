import { TextInput } from "./textInput";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { reply } from "./lib/reply";
import { Radio } from "./radio";

export function RsvpForm() {
  return (
    <form action={reply}>
      <TextInput required label="Όνομα" name="name" />
      <TextInput required label="Επίθετο" name="surname" />
      <Checkbox label="Θα έρθω με Ι.Χ." name="car" />
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
        name="will_attend"
        required
      />
      <Button name="send" label="Αποστολή" />
    </form>
  );
}
