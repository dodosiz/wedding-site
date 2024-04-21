import { HTMLInputTypeAttribute } from "react";
import styles from "./textInput.module.css";

interface InputProps {
  name: string;
  label: string;
  required?: boolean;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange(v: string): void;
  disabled?: boolean;
}

export function TextInput({ name, label, required, type, value, onChange, disabled }: InputProps) {
  return (
    <div className={styles.input_group}>
      <label
        htmlFor={name}
        className={disabled ? styles.input_label_disabled : styles.input_label}
      >
        {label} {required ? "*" : ""}
      </label>
      <input
        required={required}
        id={name}
        name={name}
        type={type}
        className={styles.input}
        value={value}
        disabled={disabled}
        onChange={(e) => { onChange(e.target.value) }}
      />
    </div>
  );
}
