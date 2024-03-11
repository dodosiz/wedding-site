import { Header } from "../header";
import styles from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspect, SuspectMobile } from "@/app/data/suspects";
import { SuspectWidget } from "../widgets/home/suspectWidget";
import { SaveTheDate } from "../widgets/home/saveTheDate";
import { Timeline } from "../widgets/home/timeline";

interface HomeSectionProps {
  suspects: Suspect[];
  suspectsMobile: SuspectMobile[];
}

export function HomeSection({ suspects, suspectsMobile }: HomeSectionProps) {
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
    }, 3000);
    return () => clearInterval(interval);
  });

  function handleTopMeasurement(
    element: HTMLElement,
    offset: number,
    callback: (n: number) => void
  ) {
    const measured = Math.round(element.getBoundingClientRect().top) || 0;
    if (measured > 0 && measured < offset) {
      callback(measured);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const letter2 = document.getElementById("2");
      const letterMobile = document.getElementById("2_mobile");
      const timeline = document.getElementById("timeline");
      const timelineMobile = document.getElementById("timeline_mobile");
      if (letter2) {
        handleTopMeasurement(letter2, DESKTOP_OFFSET, setTopDesktop);
      }
      if (letterMobile) {
        handleTopMeasurement(letterMobile, MOBILE_TOP_OFFSET, setTopMobile);
      }
      if (timeline) {
        handleTopMeasurement(timeline, DESKTOP_OFFSET, setTopTimelineDesktop);
      }
      if (timelineMobile) {
        handleTopMeasurement(
          timelineMobile,
          MOBILE_OFFSET,
          setTopTimelineMobile
        );
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
        <SaveTheDate topDesktop={topDesktop} topMobile={topMobile} />
        <Timeline
          topTimelineDesktop={topTimelineDesktop}
          topTimelineMobile={topTimelineMobile}
        />
      </div>
      <div className={styles.home_suspects_container}>
        <Header textAlign="center">
          The Usual
          <br />
          Suspects
        </Header>
        <div className={styles.suspects_grid}>
          {suspects.map((suspect, index) => (
            <SuspectWidget suspect={suspect} key={`suspect-${index}`} />
          ))}
        </div>
        <div className={styles.suspects_mobile}>
          {suspectsMobile.map((suspect, index) => (
            <Image
              key={`suspect-mobile-${index}`}
              width={suspect.width}
              height={suspect.height}
              layout="responsive"
              alt={suspect.alt}
              src={suspect.image}
            />
          ))}
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
