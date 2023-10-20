import Head from "next/head";
import styles from "../../styles/HomeNoAuth.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Onebitflix',
  description: 'Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil.',
}

const HomeNotAuth = function () {
  return (
    <>
      <Head>
      </Head>
      <main></main>
    </>
  )
};

export default HomeNotAuth;