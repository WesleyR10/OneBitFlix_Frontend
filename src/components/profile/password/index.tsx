import styles from "../../../../styles/profile.module.scss"
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import ToastComponent from "@/components/common/toast";
import profileService from "@/services/profileService";


const PasswordForm = function () {
  const router = useRouter()
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    profileService.fetchCurrent().then((password) => {
      setCurrentPassword(password.currentPassword)
      setNewPassword(password.newPassword)
    });
  }, []);

  const handlePasswordUpdate = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newPassword != confirmPassword) {
      setToastIsOpen(true)
      setErrorMessage("Senha e confirmação de senha diferentes!");
      setColor("bg-danger")
      setTimeout(() => {
        setToastIsOpen(false)
      }, 1000 * 3);

      return;
    }

    if (currentPassword === newPassword) {
      setToastIsOpen(true)
      setErrorMessage("Não coloque a nova senha igual a senha antiga!");
      setColor("bg-danger")
      setTimeout(() => {
        setToastIsOpen(false)
      }, 1000 * 3);

      return;
    }

    const res = await profileService.passwordUpdate({ currentPassword, newPassword })
    if (res === 204) {
      setToastIsOpen(true)
      setErrorMessage("Senha alterada com sucesso!");
      setColor("bg-success")
      setTimeout(() => {
        setToastIsOpen(false)

        sessionStorage.clear();
        router.push('/');
      }, 1000 * 3);

      setCurrentPassword("")
      setNewPassword("")
      setConfirmNewPassword("")
    }

    if (res === 400) {
      setToastIsOpen(true);
      setErrorMessage("Senha atual incorreta!");
      setColor("bg-danger");
      setTimeout(() => setToastIsOpen(false), 1000 * 3);
    }
  };

  return (
    <>
      <Form onSubmit={handlePasswordUpdate} className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.label}>SENHA ATUAL</Label>
            <Input name="currentPassword" type="password" id="currentPassword" placeholder="********" required minLength={6} maxLength={12} value={currentPassword} onChange={(ev) => { setCurrentPassword(ev.currentTarget.value) }} className={styles.input} />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label for="newPassword" className={styles.label}>NOVA SENHA</Label>
            <Input name="newPassword" type="password" id="newPassword" placeholder="********" required minLength={6} maxLength={12} value={newPassword} onChange={(ev) => { setNewPassword(ev.currentTarget.value) }} className={styles.inputFlex} />
          </FormGroup>
          <FormGroup>
            <Label for="confirmNewPassword" className={styles.label}>CONFIRMAR NOVA SENHA</Label>
            <Input name="confirmNewPassword" type="password" id="confirmNewPassword" placeholder="********" required minLength={6} maxLength={12} value={confirmPassword} onChange={(ev) => { setConfirmNewPassword(ev.currentTarget.value) }} className={styles.inputFlex} />
          </FormGroup>
        </div>

        <Button className={styles.formBtn} outline type="submit">
          Salvar Alterações
        </Button>
      </Form>
      <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
    </>
  )
}

export default PasswordForm