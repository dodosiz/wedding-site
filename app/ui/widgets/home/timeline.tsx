import Image from "next/image";
import styles from "./timeline.module.css";

interface TimelineProps {
  topTimelineDesktop: number;
  topTimelineMobile: number;
}

export function Timeline({
  topTimelineDesktop,
  topTimelineMobile,
}: TimelineProps) {
  return (
    <>
      <div
        className={styles.timeline_container}
        id="timeline"
        style={{ opacity: `${100 - topTimelineDesktop}%` }}
      >
        <h2 className={styles.timeline_title}>Timeline</h2>
        <Image
          src="/timeline.png"
          alt="timeline"
          width={1280}
          height={535}
          layout="responsive"
        />
      </div>
      <div
        className={styles.timeline_container_mobile}
        id="timeline_mobile"
        style={{ opacity: `${100 - topTimelineMobile}%` }}
      >
        <h2 className={styles.timeline_title}>Timeline</h2>
        <Image
          src="/timeline_mobile.png"
          alt="timeline"
          width={720}
          height={1389}
          layout="responsive"
        />
      </div>
    </>
  );
}
