import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import {
  FormStyled,
  ContainerInputForm,
  ContainerMain,
} from "../Register/style";
import { EnvelopeSimple, ArrowLeft } from "@phosphor-icons/react";
import { ButtonDefault } from "../../ArticleComposer/style";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../../../services/firebaseconfig";

export function PasswordRecovery() {
  const inputRef = useRef(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    console.log(email);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("E-mail de recuperação enviado");
    } catch (e) {
      console.error(e);
      toast.error("E-mail inválido");
    }
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
      <FormStyled>
        <div>
          <h2>Recuperar senha</h2>
        </div>
        <ContainerInputForm icon={true}>
          <input ref={inputRef} type="email" placeholder="Seu email" />
          <EnvelopeSimple size={24} color="#757575" />
        </ContainerInputForm>
        <ButtonDefault onClick={handleResetPassword}>RECUPERAR</ButtonDefault>
        <bold>
          <Link to="../auth/login">
            <ArrowLeft size="24" color="#8A8AE0" />
            Voltar para o login
          </Link>
        </bold>
      </FormStyled>
    </ContainerMain>
  );
}
