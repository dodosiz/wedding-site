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
        <Image
          src="/timeline.jpg"
          alt="timeline"
          width={4961}
          height={2607}
          layout="responsive"
        />
      </div>
      <div
        className={styles.timeline_container_mobile}
        id="timeline_mobile"
        style={{ opacity: `${100 - topTimelineMobile}%` }}
      >
        <Image
          src="/timeline_mobile.jpg"
          alt="timeline"
          width={1242}
          height={2208}
          layout="responsive"
        />
      </div>
    </>
  );
}
