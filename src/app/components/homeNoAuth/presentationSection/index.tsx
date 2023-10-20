'use client'

import Image from "next/image";
import buttonPlay from "../../../../../public/buttonPlay.svg"
import imgPresentation from "../../../../../public/homeNoAuth/imgPresentation.png"
import iconArrowDown from "../../../../../public/homeNoAuth/iconArrowDown.svg"
import styles from "./styles.module.scss";
import { Row, Container, Col, Button } from "reactstrap";
import Link from "next/link";

const PresentationSection = () => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md className="d-flex flex-column justify-content-center">
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>Tenha acesso aos melhores <br /> tutoriais de Programação.</p>
            <p className={styles.description}>Estude de onde estiver, a qualquer momento, e continue <br /> evoluindo como programador.</p>
            <Link href="/register" style={{ textDecoration: "none" }}>
              <Button className={styles.btnCta} outline>ACESSE AGORA <Image src={buttonPlay} alt="Button img" width={11} height={11} className={styles.btnImg}></Image></Button>
            </Link>
          </Col>
          <Col md>
            <Image src={imgPresentation} alt="imgIndex" width={585} height={585} className={styles.imgPresentation}></Image>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-5">
            <Image src={iconArrowDown} alt="arrowDown" width={30} height={30} className={styles.arrowDown}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;