import Head from "next/head";
import styles from "../../styles/homeNoAuth.module.scss"
import { Metadata } from "next";
import HeaderNoAuth from "./components/homeNoAuth/headerNoAuth";

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
        <HeaderNoAuth />
      </main>
    </>
  )
};

export default HomeNotAuth;