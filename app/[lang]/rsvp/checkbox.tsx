import styles from "./checkbox.module.css";

interface InputProps {
  name: string;
  label: string;
  value: boolean;
  onChange(v: boolean): void;
}

export function Checkbox({ name, label, value, onChange }: InputProps) {
  return (
    <div className={styles.input_group}>
      <input
        id={name}
        name={name}
        type="checkbox"
        value={value ? "on" : undefined}
        onChange={(e) => onChange(!value)}
        className={styles.checkbox}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
