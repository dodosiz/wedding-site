import { Suspense } from "react";
import { Guest, fetchGuests } from "./lib/fetchGuests";
import styles from "./page.module.css";

export default async function WeddingListPage() {
  const allGuests = await fetchGuests();
  const commingGuests = allGuests.filter((g) => g.will_attend === "yes");
  const totalNumberOfGuests = commingGuests.reduce((acc, current) => {
    return acc + current.number_of_people + 1;
  }, 0);
  const totalNumberOfCars = commingGuests.reduce((acc, current) => {
    return acc + (current.car ? 1 : 0);
  }, 0);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th>Όνομα</th>
              <th>Επίθετο</th>
              <th>Αριθμός καλεσμένων</th>
              <th>Αμάξι</th>
            </tr>
          </thead>
          <tbody>
            {commingGuests.map((g) => (
              <GuestRow guest={g} key={`guest-${g.id}`} />
            ))}
          </tbody>
        </table>
        <p className={styles.info}>Σύνολο καλεσμένων: {totalNumberOfGuests}</p>
        <p className={styles.info}>Σύνολο αμάξια: {totalNumberOfCars}</p>
      </div>
    </Suspense>
  );
}

function GuestRow(props: { guest: Guest }) {
  return (
    <tr className={styles.row}>
      <td>{props.guest.name}</td>
      <td>{props.guest.surname}</td>
      <td>{props.guest.number_of_people}</td>
      <td>{props.guest.car ? "ναι" : "όχι"}</td>
    </tr>
  );
}
