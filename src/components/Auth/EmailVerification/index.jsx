import { ButtonDefault } from "../../ArticleComposer/style";
import { FormStyled, ProgressForm } from "../Register/style";
import { VerificationContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../services/firebaseconfig";
import { ArrowLeft } from "@phosphor-icons/react";
import toast, { Toaster } from "react-hot-toast";
import { ContainerMain } from "../Register/style";

export function EmailVerification({ status, setStatus }) {
  const sendConfirmEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success("E-mail enviado");
    } catch (e) {
      console.log(e);
      toast.error("Houve algum no problema no envio");
    }
  };

  const backLogin = (e) => {
    e.preventDefault();

    setStatus("loggedOut");
    useNavigate("../auth/login");
  };

  return (
    <ContainerMain>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          loading: {
            duration: 1000,
          },
        }}
      />

      <VerificationContainer>
        <h1>Confirme seu e-mail</h1>
        <p>
          Finalize seu cadastro através do link que enviamos no seu e-mail para
          fazer parte desse incrível portal de notícias sobre tecnologia e muito
          mais!
        </p>
        <a href="">Já verifiquei o email</a>
        <Link onClick={sendConfirmEmail}>
          E-mail não chegou? Reenviar e-mail
        </Link>
        <strong>
          <Link onClick={backLogin}>
            <ArrowLeft size="24" color="#8A8AE0" />
            Voltar para o login
          </Link>
        </strong>
      </VerificationContainer>
    </ContainerMain>
  );
}
