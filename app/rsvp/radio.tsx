import styles from "./radio.module.css";

interface RadioProps {
  values: { value: string; label: string }[];
  name: string;
}

export function Radio({ values, name }: RadioProps) {
  return (
    <div className={styles.input_group}>
      {values.map((v) => {
        return (
          <>
            <input
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
