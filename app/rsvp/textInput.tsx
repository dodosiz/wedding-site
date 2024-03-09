import styles from "./textInput.module.css";

interface InputProps {
  name: string;
  label: string;
  required?: boolean;
}

export function TextInput({ name, label, required }: InputProps) {
  return (
    <div className={styles.input_group}>
      <label htmlFor={name} className={styles.input_label}>
        {label} {required ? "*" : ""}
      </label>
      <input
        required={required}
        id={name}
        name={name}
        type="text"
        className={styles.input}
      />
    </div>
  );
}
