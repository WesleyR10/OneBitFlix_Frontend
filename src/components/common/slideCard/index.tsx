/* eslint-disable @next/next/no-img-element */

import styles from "./styles.module.scss";
import { CourseType } from "@/services/courseService";
import Link from "next/link";

interface props {
  course: CourseType;
}
const SlideCard = function ({ course }: props) {
  return (
    <>
      <Link href={`/courses/${course.id}`}>
        <div className={styles.slide}>
          <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.slideImg} />
          <p className={styles.slideTitle}>{course.name}</p>
          <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};

export default SlideCard;