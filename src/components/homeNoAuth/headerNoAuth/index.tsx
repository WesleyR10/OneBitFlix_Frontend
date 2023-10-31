/* eslint-disable @next/next/no-img-element */
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
        <p>Se cadastre para ter acesso aos cursos</p>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
      </div>
      <Container className={styles.nav}>
        <img src="/logoOnebitflix.svg" alt="logo Onebitflix" className={styles.imgLogoNav} />
        <div>
          <Link href="/login">
            <Button className={styles.navBtn} outline>Entrar</Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navBtn} outline>Quero fazer parte</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;