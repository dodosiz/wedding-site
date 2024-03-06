"use client";
import Image from "next/image";
import styles from "./foodSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";
import { RestaurantGroup, Location } from "@/app/data/food";

interface FoodSectionProps {
  groups: RestaurantGroup[];
}

export function FoodSection({ groups }: FoodSectionProps) {
  return (
    <>
      <Header className={styles.food_header} textAlign="center">
        Γευστικές περιηγήσεις
      </Header>
      <GeneralIntro />
      <GeographicalIntro />
      <div
        className={common.text_container}
        style={{ textAlign: "left", alignItems: "start" }}
      >
        {groups.map((group, index) => (
          <RestaurantGroup key={`restaurant-group-${index}`} group={group} />
        ))}
        {/*<div className={styles.side_gif}>
          <Image
            style={{ marginTop: "100px" }}
            width={350}
            height={350}
            alt="Drink"
            layout="responsive"
            src="/drink.gif"
          />
              </div>*/}
      </div>
      <ArticleReference />
    </>
  );
}

interface RestaurantGroupProps {
  group: RestaurantGroup;
}

function RestaurantGroup({ group }: RestaurantGroupProps) {
  return (
    <>
      <h2>
        <strong>{group.name}</strong>
      </h2>
      {group.locations.map((location, index) => (
        <Location key={`location-${index}`} location={location} />
      ))}
    </>
  );
}

interface LocationProps {
  location: Location;
}

function Location({ location }: LocationProps) {
  return (
    <>
      <h3 className={styles.location_header}>{location.name}</h3>
      <ul>
        {location.restaurants.map((restaurant, index) => {
          return (
            <li key={`restaurant-${index}`}>
              <a href={restaurant.link} target="_blank">
                {restaurant.name}
              </a>
              {restaurant.description ? " " : ""}
              {restaurant.description}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function GeneralIntro() {
  return (
    <div className={common.text_container}>
      <Image
        className={styles.food_image}
        width={1280}
        height={1214}
        layout="responsive"
        alt="food options in Syros"
        src="/food.png"
      />
      <p>
        Το πιο φημισμένο προϊόν του νησιού είναι το συριανό λουκούμι. Η τέχνη
        της παρασκευής του έφτασε στη Σύρο με τους πρώτους πρόσφυγες από Χίο,
        ενώ το έτερο συριανό προϊόν των λουκουμοποιών είναι η χαλβαδόπιτα που
        παρασκευάζεται από θυμαρίσιο συριανό μέλι και φρεσκοψημένο αμύγδαλο. Η
        Σύρος φημίζεται και για τα τυροκομικά της, όπως το περίφημο τυρί Σαν
        Μιχάλη που ξεχωρίζει για τη μοναδική πικάντικη γεύση του. Στην οδό Χίου
        θα βρείτε αρκετά μαγαζιά για να προμηθευτείτε παραδοσιακά προϊόντα του
        νησιού.
      </p>
    </div>
  );
}

function GeographicalIntro() {
  return (
    <div
      className={common.text_container}
      style={{ textAlign: "left", alignItems: "start" }}
    >
      <p>
        Τρεις είναι οι επαρχίες (πρώην δήμοι) που συνθέτουν τα χωριά της Σύρου:
      </p>
      <ul>
        <li>
          <strong>Ερμούπολη</strong>, που αποτελείται από την πρωτεύουσα και τα
          γύρω χωριά.
        </li>
        <li>
          <strong>Άνω Σύρος</strong>, με την ομώνυμη ιστορική έδρα του δήμου και
          τα χωριά της Σύρου που ανήκουν στην Απάνω Μεριά του νησιού, στα
          βόρεια.
        </li>
        <li>
          <strong>Ποσειδωνία</strong>, με τα χωριά της Σύρου που συγκεντρώνουν
          τη μεγαλύτερη τουριστική κίνηση στο νησί και βρίσκονται στο νότιο
          τμήμα.
        </li>
      </ul>
      <div className={styles.image_map}>
        <Image
          width={562}
          height={659}
          alt="Map"
          layout="responsive"
          src="/map.jpg"
        />
      </div>
      <p>
        Παρακάτω θα βρείτε κάποιες προτάσεις για φαγητό και για ποτό, ανά
        περιοχή. Κάνοντας κλικ πάνω στα ονόματα θα βρεθείτε στην αντίστοιχη
        ιστοσελίδα του Trip Advisor.
      </p>
    </div>
  );
}

function ArticleReference() {
  return (
    <div className={common.text_container}>
      <p>
        Αξίζει να διαβάσετε και{" "}
        <a
          href="https://www.gastronomos.gr/exodos/syros-o-apolytos-odigos-me-ta-kalytera-estiatoria-mpar-zacharoplasteia/141524/?fbclid=IwAR0LcL8L1O4Qz3ItcVsbjDsE2qDmtE3IUExX4ThDz_VwTvyUQPFepgHnZfQ"
          target="_blank"
        >
          αυτό το άρθρο
        </a>{" "}
        από τον Γαστρονόμο.
      </p>
    </div>
  );
}
