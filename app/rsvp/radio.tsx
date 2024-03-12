import styles from "./radio.module.css";

interface RadioProps {
  values: { value: string; label: string }[];
  name: string;
  required?: boolean;
  onChange(v: string): void;
}

export function Radio({ values, name, required, onChange }: RadioProps) {
  return (
    <div className={styles.input_group}>
      {values.map((v) => {
        return (
          <div key={`input-${v}`} className={styles.input_wrapper}>
            <input
              required={required}
              className={styles.radio_input}
              type="radio"
              id={v.value}
              name={name}
              value={v.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={v.value}>{v.label}</label>
          </div>
        );
      })}
    </div>
  );
}
