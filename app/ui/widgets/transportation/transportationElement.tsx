import { Transportation } from "@/app/data/transportation";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./transportationElement.module.css";
import Image from "next/image";

interface TransportationProps {
  transportation: Transportation;
  show: boolean;
  handleClick(input: boolean, callback: () => void): void;
  setShow(b: boolean): void;
  getClassName(b: boolean): string;
}

export function TrasportationElement({
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
