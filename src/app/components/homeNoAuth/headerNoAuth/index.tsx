'use client'

import Image from "next/image";
import logoCta from "../../../../../public/homeNoAuth/logoCta.png"
import logoOnebitflix from "../../../../../public/logoOnebitflix.svg"
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <Image src={logoCta} alt="logoCta" width={20} height={20} className={styles.imgCta} />
        <p>Se cadastre para ter acesso aos cursos</p>
        <Image src={logoCta} alt="logoCta" width={20} height={20} className={styles.imgCta} />
      </div>
      <Container className={styles.nav}>
        <Image src={logoOnebitflix} alt="logoOnebitflix" width={180} height={40} className={styles.imgLogoNav} />
        <div>
          <Link href='/login'><Button className={styles.navBtn} outline>Entrar</Button></Link>
          <Link href='/login'><Button className={styles.navBtn} outline>Quero fazer parte</Button></Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;