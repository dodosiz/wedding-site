import { Header } from "../header";
import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function HomeSection() {
  const DESKTOP_OFFSET = 500;
  const MOBILE_OFFSET = 100;
  const MOBILE_TOP_OFFSET = 40;

  const [counter, setCounter] = useState(0);
  const [topMobile, setTopMobile] = useState(MOBILE_TOP_OFFSET);
  const [topDesktop, setTopDesktop] = useState(DESKTOP_OFFSET);
  const [topTimelineDesktop, setTopTimelineDesktop] = useState(DESKTOP_OFFSET);
  const [topTimelineMobile, setTopTimelineMobile] = useState(MOBILE_OFFSET);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 2) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleScroll = () => {
      const letter2 = document.getElementById("2");
      const letterMobile = document.getElementById("2_mobile");
      const timeline = document.getElementById("timeline");
      const timelineMobile = document.getElementById("timeline_mobile");
      if (letter2) {
        const measured = Math.round(letter2.getBoundingClientRect().top) || 0;
        if (measured > 0 && measured < DESKTOP_OFFSET) {
          setTopDesktop(measured);
        }
      }
      if (letterMobile) {
        const measured =
          (Math.round(letterMobile.getBoundingClientRect().top) || 0) - MOBILE_TOP_OFFSET;
        if (measured > 0 && measured < MOBILE_TOP_OFFSET) {
          setTopMobile(measured);
        }
      }
      if (timeline) {
        const measured =
          (Math.round(timeline.getBoundingClientRect().top) || 0) - 300;
        if (measured > 0 && measured < DESKTOP_OFFSET) {
          setTopTimelineDesktop(measured);
        }
      }
      if (timelineMobile) {
        const measured =
          (Math.round(timelineMobile.getBoundingClientRect().top) || 0) - MOBILE_OFFSET;
        if (measured > 0 && measured < MOBILE_OFFSET) {
          setTopTimelineMobile(measured);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const next = () => {
    if (counter > 2) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const previous = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(3);
    }
  };
  return (
    <>
      <div className={styles.home_background_container}>
        <div className={getBackgroundClass(counter)}>
          <div className={styles.arrow} onClick={previous}>
            <ChevronLeftIcon />
          </div>
          <div className={`${styles.arrow} ${styles.right}`} onClick={next}>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className={styles.home_text_container}>
        <div className={styles.save_the_date_grid}>
          <div></div>
          <div
            id="2"
            className={styles.save_the_date_letter_2}
            style={{ right: topDesktop }}
          >
            <Image
              src="/save_the_date/letter2.png"
              alt="letter 2"
              width={307}
              height={441}
            />
          </div>
          <div
            id="2_mobile"
            className={styles.save_the_date_letter_2_mobile}
            style={{ right: topMobile }}
          >
            <Image
              src="/save_the_date/letter2.png"
              alt="letter 2"
              width={112}
              height={161}
            />
          </div>
          <div
            className={styles.save_the_date_text}
            style={{ opacity: `${100 - topDesktop}%` }}
          >
            <p className={styles.timeline_date}>
              Κυριακή
              <br />
              28 Ιουλίου 2024
            </p>
            <p className={styles.timeline_place}>Ερμούπολη, Σύρος</p>
            <h2 className={styles.timeline_title}>Weekend Timeline</h2>
            <p className={styles.timeline_silenced}>27-28 Ιουλίου</p>
          </div>
          <div
            className={styles.save_the_date_text_mobile}
            style={{ opacity: `${100 - topMobile}%` }}
          >
            <p className={styles.timeline_date}>
              Κυριακή
              <br />
              28 Ιουλίου 2024
            </p>
            <p className={styles.timeline_place}>Ερμούπολη, Σύρος</p>
            <h2 className={styles.timeline_title}>Weekend Timeline</h2>
            <p className={styles.timeline_silenced}>27-28 Ιουλίου</p>
          </div>
          <div
            className={styles.save_the_date_letter_8}
            style={{ left: topDesktop }}
          >
            <Image
              src="/save_the_date/letter8.png"
              alt="letter 8"
              width={307}
              height={441}
            />
          </div>
          <div
            className={styles.save_the_date_letter_8_mobile}
            style={{ left: topMobile }}
          >
            <Image
              src="/save_the_date/letter8.png"
              alt="letter 8"
              width={112}
              height={161}
            />
          </div>
          <div></div>
        </div>
        <div className={styles.timeline_container} id="timeline" style={{ opacity: `${100 - topTimelineDesktop}%` }}>
          <Image
            src="/timeline.jpg"
            alt="timeline"
            width={4961}
            height={2607}
            layout="responsive"
          />
        </div>
        <div className={styles.timeline_container_mobile} id="timeline_mobile"  style={{ opacity: `${100 - topTimelineMobile}%` }}>
          <Image
            src="/timeline_mobile.jpg"
            alt="timeline"
            width={1242}
            height={2208}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.home_suspects_container}>
        <Header textAlign="center">
          The Usual
          <br />
          Suspects
        </Header>
        <div className={styles.suspects_grid}>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>
              Ο γαμπρός
              <br />
              προγραμματιστής
            </Header>
            <Image
              className={styles.suspect_img}
              width={250}
              height={500}
              alt="theo"
              src="/usual_suspects/theo.jpg"
            />
            <p>Αυτός που πληρώνει την νύφη.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>
              Η νύφη
              <br />
              αρχιτέκτονας
            </Header>
            <Image
              className={styles.suspect_img}
              width={250}
              height={500}
              alt="natalia"
              src="/usual_suspects/natalia.jpg"
            />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>
              Το βαπτιστήρι
              <br />
              τσουρεκάκι
            </Header>
            <div className={styles.suspects_grid_box}></div>
            <p>Η μικρή ταραξίας</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>
              Η κουμπάρα
              <br />
              σομελιέ
            </Header>
            <Image
              className={styles.suspect_img}
              width={250}
              height={500}
              alt="alex"
              src="/usual_suspects/alex.jpg"
            />
            <p>Προμήθεια και διακίνηση αλκοόλ.</p>
          </div>
          <div className={styles.suspects_grid_item}>
            <Header textAlign="center" level={3}>
              Ο νονός
              <br />
              ψυχολόγος
            </Header>
            <Image
              className={styles.suspect_img}
              width={250}
              height={500}
              alt="noulis"
              src="/usual_suspects/noulis.jpg"
            />
            <p>Αξιολόγηση και διάγνωση καταλληλότητας προσαρμογής σε πάρτυ.</p>
          </div>
        </div>
        <div className={styles.suspects_mobile}>
           <Image
              width={1125}
              height={1288}
              layout="responsive"
              alt="theo"
              src="/usual_suspects/mobile/0.png"
            />
            <Image
              width={1125}
              height={2436}
              layout="responsive"
              alt="natalia and artemis"
              src="/usual_suspects/mobile/1.png"
            />
            <Image
              width={1125}
              height={2436}
              layout="responsive"
              alt="noulis and ales"
              src="/usual_suspects/mobile/2.png"
            />
        </div>
        <div className={styles.suspects_logo}>
          <Image
            width={275}
            height={208}
            layout="responsive"
            alt="the usual suspects"
            src="/usual_suspects.png"
          />
          <p>
            &quot;The greatest trick the devil ever pulled was convincing the
            world he did not exist.&quot;
          </p>
        </div>
      </div>
    </>
  );
}

function getBackgroundClass(index: number) {
  switch (index) {
    case 0:
      return styles.home_background0;
    case 1:
      return styles.home_background1;
    case 2:
      return styles.home_background2;
    case 3:
      return styles.home_background3;
    default:
      return styles.home_background0;
  }
}
