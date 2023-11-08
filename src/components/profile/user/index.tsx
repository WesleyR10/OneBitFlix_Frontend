/* eslint-disable @next/next/no-img-element */
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styles from "../../../../styles/profile.module.scss"
import { FormEvent, useEffect, useState } from "react"
import profileService from "@/services/profileService"
import ToastComponent from "@/components/common/toast"
import { useRouter } from "next/router"

const UserForm = function () {
  const router = useRouter()
  const [color, setColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [changeEmail, setChangeEmail] = useState(email)
  const [created_at, setCreated_at] = useState("")

  const date = new Date(created_at);
  const month = date.toLocaleDateString("default", { month: "long" })

  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setChangeEmail(user.email);
      setCreated_at(user.createdAt);
    });
  }, []);

  const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await profileService.userUpdate({
      firstName,
      lastName,
      phone,
      email,
      created_at,
    });

    if (res === 200) {
      setToastIsOpen(true)
      setErrorMessage("Informações alteradas com sucesso!")
      setColor("bg-success")
      setTimeout(() => setToastIsOpen(false), 1000 * 3)

      if (email != changeEmail) {
        sessionStorage.clear();
        router.push('/');
      }
    } else {
      setToastIsOpen(true);
      setErrorMessage("Você não pode mudar para esse email!");
      setColor("bg-danger");
      setTimeout(() => setToastIsOpen(false), 1000 * 3);
    }
  }

  return (
    <>
      <Form onSubmit={handleUserUpdate} className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {firstName.slice(0, 1)}{lastName.slice(0, 1)}
          </p>
          <p className={styles.userName}> {`${firstName} ${lastName}`} </p>
        </div>
        <div className={styles.memberTime}>
          <img src="/profile/iconUserAccount.svg" alt="icon Profile" className={styles.memberTimeImg} />
          <p className={styles.memberText}>Membro desde <br /> {`${date.getDate()} de ${month} de ${date.getFullYear()}`} </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for='firstName'>
              NOME
            </Label >
            <Input name="firstName" type="text" id="firstName" placeholder="Qual o seu primeiro nome ?" required maxLength={20} className={styles.inputFlex} value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for='lastName'>
              SOBRENOME
            </Label>
            <Input name="lastName" type="text" id="lastName" placeholder="Qual o seu ultimo nome ?" required maxLength={20} className={styles.inputFlex} value={lastName} onChange={(event) => { setLastName(event.target.value) }} />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for='phone'>
              WHATSAPP
            </Label>
            <Input name="phone" type="tel" id="phone" placeholder="(xx) 9xxxx-xxxx" required className={styles.input} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for='email'>
              E-MAIL
            </Label>
            <Input name="email" type="email" id="email" placeholder="Coloque o seu email" required className={styles.input} value={email} onChange={(event) => { setEmail(event.target.value) }} />
          </FormGroup>

          <Button outline type="submit" className={styles.formBtn}>
            Salvar Alterações
          </Button>
        </div>
      </Form>
      <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
    </>
  )
}

export default UserForm