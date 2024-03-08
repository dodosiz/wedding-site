import styles from "./textInput.module.css";

interface InputProps {
  name: string;
  label: string;
}

export function TextInput({ name, label }: InputProps) {
  return (
    <div className={styles.input_group}>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <input id={name} name={name} type="text" className={styles.input} />
    </div>
  );
}
