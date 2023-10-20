import Head from "next/head";
import styles from "../../styles/homeNoAuth.module.scss"
import { Metadata } from "next";
import HeaderNoAuth from "./components/homeNoAuth/headerNoAuth";
import PresentationSection from "./components/homeNoAuth/presentationSection";
import CardsSection from "./components/homeNoAuth/cardsSections";

export const metadata: Metadata = {
  title: 'Onebitflix',
  description: 'Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil.',
}

const HomeNotAuth = function () {
  return (
    <>
      <Head>
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  )
};

export default HomeNotAuth;