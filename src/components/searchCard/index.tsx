/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.scss";
import { CourseType } from "@/services/courseService";


interface props {
  course: CourseType;
}
const SearchCard = function ({ course }: props) {
  return <>
    <Link href={`/course/${course.id}`} className="link">
      <div className={styles.searchCard}>
        <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} className={styles.searchCardImg} />
        <p className={styles.searchCardTitle}>{course.name}</p>
        <p className={styles.searchCardDescription}>{course.synopsis}</p>
      </div>
    </Link>
  </>;
};

export default SearchCard;