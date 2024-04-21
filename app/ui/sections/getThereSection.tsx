import styles from "./getThereSection.module.css";
import { useState } from "react";
import { PLANE, SHIP } from "@/app/data/transportation";
import { TrasportationElement } from "../widgets/transportation/transportationElement";
import { Intro } from "../widgets/transportation/intro";
import { SupportedLang } from "@/app/lib/localization";

export function GetThereSection({ lang }: { lang: SupportedLang }) {
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
    <div className={styles.get_there_section}>
      <Intro lang={lang} />
      <div className={styles.grid_container}>
        <TrasportationElement
          getClassName={getClassName}
          handleClick={handleClick}
          setShow={setShowShip}
          show={showShip}
          transportation={SHIP}
          lang={lang}
        />
        <TrasportationElement
          getClassName={getClassName}
          handleClick={handleClick}
          setShow={setShowPlane}
          show={showPlane}
          transportation={PLANE}
          lang={lang}
        />
        <div id="bottom"></div>
      </div>
    </div>
  );
}
