/* eslint-disable @next/next/no-img-element */
import { Container } from 'reactstrap'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} />
        <a href="http://onebitcode.com" target={"_blank"} className={styles.footerLink}>ONEBITCODE.COM</a>
      </Container>
    </>
  )
}

export default Footer