import styles from "./getThereSection.module.css";
import common from "./common.module.css";
import { Header } from "../header";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import { PLANE, SHIP, Transportation } from "@/app/data/transportation";

export function GetThereSection() {
  const [showShip, setShowShip] = useState(false);
  const [showPlane, setShowPlane] = useState(false);
  const getClassName = (show: boolean) => {
    return `${styles.p_hidden} ${show ? styles.p_shown : undefined}`;
  };
  const handleClick = (input: boolean, callback: () => void) => {
    const element = document.getElementById("bottom");
    if (element && !input) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
    callback();
  };
  return (
    <>
      <Intro />
      <div className={styles.grid_container}>
        <TrasportationElement
          getClassName={getClassName}
          handleClick={handleClick}
          setShow={setShowShip}
          show={showShip}
          transportation={SHIP}
        />
        <TrasportationElement
          getClassName={getClassName}
          handleClick={handleClick}
          setShow={setShowPlane}
          show={showPlane}
          transportation={PLANE}
        />
        <div id="bottom"></div>
      </div>
    </>
  );
}

interface TransportationProps {
  transportation: Transportation;
  show: boolean;
  handleClick(input: boolean, callback: () => void): void;
  setShow(b: boolean): void;
  getClassName(b: boolean): string;
}

function TrasportationElement({
  transportation,
  show,
  handleClick,
  setShow,
  getClassName,
}: TransportationProps) {
  return (
    <div>
      <div className={styles.transition_title}>
        <Image
          src={transportation.image}
          width={40}
          height={40}
          alt={transportation.imageAlt}
        />
        <h2
          className={`${styles.text_center} ${styles.clickable}`}
          onClick={() =>
            handleClick(show, () => {
              setShow(!show);
            })
          }
        >
          {transportation.title}{" "}
          {show ? (
            <ChevronDownIcon style={{ width: "15px" }} />
          ) : (
            <ChevronRightIcon style={{ width: "15px" }} />
          )}
        </h2>
      </div>
      <p className={getClassName(show)}>{transportation.description}</p>
      {transportation.contacts.map((contact, index) => (
        <p key={`contact-${index}`} className={getClassName(show)}>
          <b>{contact.name}:</b> {contact.telephone}
        </p>
      ))}
    </div>
  );
}

function Intro() {
  return (
    <div className={common.text_container}>
      <Header textAlign="center">Μετάβαση</Header>
      <p>
        Η πλεονεκτική θέση της Σύρου στην καρδιά των Κυκλάδων και η κοντινή της
        απόσταση από την Αθήνα δίνει τη δυνατότητα σε όλους τους ταξιδιώτες να
        μεταβούν στο νησί με όποιο τρόπο τους εξυπηρετεί περισσότερο, είτε
        αεροπορικώς είτε με πλοίο.
      </p>
    </div>
  );
}
