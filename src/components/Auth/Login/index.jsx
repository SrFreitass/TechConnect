import {
  EnvelopeSimple,
  Eye,
  EyeSlash,
  Keyhole,
  Warning
} from "@phosphor-icons/react";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { ButtonDefault } from "../../ArticleComposer/style";
import { Loader } from "../../Loader";
import { useVerifyEmail } from "../hook/useVerifyEmail";
import {
  ContainerInputForm,
  ContainerMain,
  FormStyled,
} from "../Register/style";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signError, setSignError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const navigate = useNavigate();
  const { status, setStatus } = useVerifyEmail();
  console.log(errors);

  const handleVisiblePassword = () => {
    setShowPassword((state) => !state);
  };

  console.log(status);

  const handleSubmitLogin = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      setSignError(false);
      return navigate("../home");
    } catch (error) {
      setSignError(true);
    }
  };

  if (status == "loggedOut") {
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
        <FormStyled onSubmit={handleSubmit((data) => handleSubmitLogin(data))}>
          <div>
            <h1>Faça seu login</h1>
            <p>
              TechConnect sempre sendo o melhor portal de notícias da internet!
            </p>
          </div>

          <ContainerInputForm error={errors} icon={true}>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="E-mail"
            />
            <EnvelopeSimple size={24} color="#757575" />
            {errors?.email?.type == "required" && (
              <div>
                {" "}
                <Warning size={24} /> <span>Preencha os espaços em branco</span>{" "}
              </div>
            )}
          </ContainerInputForm>

          <ContainerInputForm error={errors} icon={true}>
            <input
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
            />
            <Keyhole size={24} color="#757575" />
            {showPassword ? (
              <Eye size={24} onClick={handleVisiblePassword} color="#C291F4" />
            ) : (
              <EyeSlash
                color="#C291F4"
                size={24}
                onClick={handleVisiblePassword}
              />
            )}
            {signError && (
              <>
                <div>
                  {" "}
                  <Warning size={24} /> <span>Senha ou e-mail incorretos</span>{" "}
                </div>
              </>
            )}
            {errors?.password?.type == "required" && (
              <div>
                {" "}
                <Warning size={24} /> <span>Preencha os espaços em branco</span>{" "}
              </div>
            )}
            <div>
              <Link to="../auth/recovery">Esqueci minha senha</Link>
            </div>
          </ContainerInputForm>
          <ButtonDefault>ENTRAR</ButtonDefault>
          <p>
            Ainda não tem uma conta?{" "}
            <Link to="../auth/register">Registre-se aqui</Link>
          </p>
        </FormStyled>
      </ContainerMain>
    );
  }

  if (status == "emailVerified") {
    return <Navigate to="../home" />;
  }

  return (
    <>
      <Loader />
      {status == "verifyEmail" && navigate("../auth/register")}
    </>
  );
}
