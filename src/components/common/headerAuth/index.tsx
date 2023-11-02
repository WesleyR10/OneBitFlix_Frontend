/* eslint-disable @next/next/no-img-element */

import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Form, Input } from "reactstrap";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Acessibilidade

const HeaderAuth = () => {
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.clear()

    router.push("/")
  }

  const [modalOpen, setModalOpen] = useState(false)
  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home">
          <img src="/logoOnebitflix.svg" alt="logo Onebitflix" className={styles.imgLogoNav} />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input name="search" type="search" placeholder="Pesquisar" className={styles.input} />
          </Form>
          <img src="/homeAuth/iconSearch.svg" alt="lupa Header" className={styles.searchImg} />
          <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
        </div>

        <Modal isOpen={modalOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <Link href="/profile">
            <p className={styles.modalLink}>Meus Dados</p>
          </Link>
          <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
        </Modal>

      </Container>
    </>
  )
}

export default HeaderAuth