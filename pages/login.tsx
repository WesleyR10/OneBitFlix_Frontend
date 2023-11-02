import styles from '../styles/registerLogin.module.scss'
import Head from 'next/head'
import HeaderGeneric from '@/components/common/headerGeneric'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Footer from '@/components/common/footer'

const Login = () => {
  return (
    <>
      <Head>
        <title>Onebitflix - Login</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric logoUrl='/' btnUrl='/register' btnContent='Quero fazer parte' />
        <Container className='py-5'>
          <p className={styles.formTitle}> Bem-vindo(a) de volta!</p>
          <Form className={styles.form}>
            <p className='text-center'> <strong>Bem-vindo(a) ao OneBitFlix </strong> </p>
            <FormGroup>
              <Label for='email' className={styles.label}> E-MAIL </Label>
              <Input id='email' name='email' type='email' placeholder='Qual o seu email?' required className={styles.input} />
            </FormGroup>
            <FormGroup>
              <Label for='password' className={styles.label}> SENHA </Label>
              <Input id='password' name='password' type='password' placeholder='Qual a sua senha?' required className={styles.input} />
            </FormGroup>
            <Button outline className={styles.formBtn}> ENTRAR </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default Login