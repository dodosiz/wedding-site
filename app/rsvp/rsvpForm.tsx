import { TextInput } from "./textInput";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

export function RsvpForm() {
  return (
    <form>
      <TextInput label="Όνομα" name="name" />
      <TextInput label="Επίθετο" name="surname" />
      <Checkbox label="Θα έρθω με Ι.Χ." name="car" />
      <Button name="send" label="Αποστολή" />
    </form>
  );
}
