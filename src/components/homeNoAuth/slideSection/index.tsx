import Link from "next/link";
import { Container, Button } from "reactstrap";
import { CourseType } from "../../../services/courseService";
import styles from "./styles.module.scss";
import SlideComponent from "../../common/slideComponent";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>Se cadastre para acessar!</Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;