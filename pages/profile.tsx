import Head from "next/head";
import { useEffect, useState } from "react"
import styles from "../styles/profile.module.scss"
import HeaderAuth from "@/components/common/headerAuth";
import UserForm from "@/components/profile/user";
import { Row, Col, Container, Button } from "reactstrap";
import Footer from "@/components/common/footer";
import PasswordForm from "@/components/profile/password";
import { useRouter } from "next/router";
import PageSpinner from "@/components/common/spinner";


const UserInfo = function () {
  const [form, setForm] = useState("userForm")
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>Onebitflix - Meus dados</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}><HeaderAuth /></div>
        <Container className="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button className={styles.renderForm} onClick={() => { setForm("userForm") }} style={{ color: form === "userForm" ? "#FF0044" : "white" }}> DADOS PESSOAIS</Button>
              <Button className={styles.renderForm} onClick={() => { setForm("passwordForm") }} style={{ color: form === "passwordForm" ? "#FF0044" : "white" }}> SENHA</Button>
            </Col>
            <Col md>
              {form === "userForm" ? <UserForm /> : <PasswordForm />}
            </Col>
          </Row>
        </Container>
        <div className={`${form === "userForm" ? styles.footer : styles.absoluteFooter}`}>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default UserInfo