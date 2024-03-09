import styles from "./checkbox.module.css";

interface InputProps {
  name: string;
  label: string;
}

export function Checkbox({ name, label }: InputProps) {
  return (
    <div className={styles.input_group}>
      <input
        id={name}
        name={name}
        type="checkbox"
        value="on"
        className={styles.checkbox}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
