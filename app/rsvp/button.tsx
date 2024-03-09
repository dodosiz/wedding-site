import styles from "./button.module.css";

interface InputProps {
  name: string;
  label: string;
}

export function Button({ name, label }: InputProps) {
  return (
    <div className={styles.input_group}>
      <input
        id={name}
        name={name}
        type="submit"
        value={label}
        className={styles.button}
      />
    </div>
  );
}
