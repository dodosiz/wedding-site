import styles from "./radio.module.css";

interface RadioProps {
  values: { value: string; label: string }[];
  name: string;
  required?: boolean;
}

export function Radio({ values, name, required }: RadioProps) {
  return (
    <div className={styles.input_group}>
      {values.map((v) => {
        return (
          <>
            <input
              required={required}
              className={styles.radio_input}
              type="radio"
              id={v.value}
              name={name}
              value={v.value}
            />
            <label htmlFor={v.value}>{v.label}</label>
          </>
        );
      })}
    </div>
  );
}
