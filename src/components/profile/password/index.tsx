import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styles from "../../../../styles/profile.module.scss"

const PasswordForm = function () {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.label}>SENHA ATUAL</Label>
            <Input name="currentPassword" type="password" id="currentPassword" placeholder="********" required minLength={6} maxLength={12} className={styles.input} />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label for="newPassword" className={styles.label}>NOVA SENHA</Label>
            <Input name="newPassword" type="password" id="newPassword" placeholder="********" required minLength={6} maxLength={12} className={styles.inputFlex} />
          </FormGroup>
          <FormGroup>
            <Label for="confirmNewPassword" className={styles.label}>CONFIRMAR NOVA SENHA</Label>
            <Input name="confirmNewPassword" type="password" id="confirmNewPassword" placeholder="********" required minLength={6} maxLength={12} className={styles.inputFlex} />
          </FormGroup>
        </div>

        <Button className={styles.formBtn} outline>
          Salvar Alterações
        </Button>
      </Form>
    </>
  )
}

export default PasswordForm