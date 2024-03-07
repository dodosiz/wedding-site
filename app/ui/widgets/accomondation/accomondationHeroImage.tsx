import Image from "next/image";
import styles from "./accomondationHeroImage.module.css";

export function AccomondationHeroImage() {
  return (
    <>
      <Image
        src="/accomondation/accom_desktop.jpg"
        className={styles.image_desktop}
        width={2719}
        height={1597}
        alt="accomondation"
        layout="responsive"
      />
      <Image
        src="/accomondation/accom_mobile.jpg"
        className={styles.image_mobile}
        width={1125}
        height={1224}
        alt="accomondation"
        layout="responsive"
      />
    </>
  );
}
