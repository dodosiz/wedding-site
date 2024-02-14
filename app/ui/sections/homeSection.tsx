import styles from "./homeSection.module.css";

export function HomeSection() {
  return (
    <div className={styles.home_container}>
      <div className={styles.white_background}>
        <div>{"Παντρευόμαστε και βαφτίζουμε το κοριτσάκι μας."}</div>
      </div>
      <div className={styles.artemis_background}></div>
    </div>
  );
}
