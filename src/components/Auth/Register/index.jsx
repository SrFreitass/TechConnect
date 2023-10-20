import { Wrapper } from "../../../Styles/Wrapper";
import { Header } from "../../Header";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import {
  FormStyled,
  ContainerInputForm,
  ContainerCheckForm,
  ProgressForm,
} from "./style";
import { ButtonDefault } from "../../ArticleComposer/style";
import {
  Eye,
  Keyhole,
  Warning,
  EnvelopeSimple,
  User,
  EyeSlash,
  ArrowLeft,
} from "@phosphor-icons/react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../services/firebaseconfig";
import { useEffect, useState } from "react";
import { EmailVerification } from "../EmailVerification";
import { FirebaseError } from "firebase/app";
import { Loader } from "../../Loader";
import { useVerifyEmail } from "../hook/useVerifyEmail";
import { ContainerMain } from "./style";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { status, setStatus } = useVerifyEmail();

  const handleSubmitRegister = async (data) => {
    if (data.password === data.passwordConfirmed) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        console.log("conta criada");
        await sendEmailVerification(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: data.username,
        });
        setStatus("verifyEmail");
      } catch (error) {
        console.log(error);
        setError("errorEmail");
        console.log("O e-mail é inválido ou já está em uso");
      }
      return;
    }

    if (data.password != data.passwordConfirmed) setError("notPassword");
  };

  const handleVisiblePassword = () => {
    setShowPassword((state) => !state);
  };

  if (status == "loggedOut") {
    return (
      <ContainerMain>
        <FormStyled
          onSubmit={handleSubmit((data) => handleSubmitRegister(data))}
        >
          <div>
            <h1>Crie sua conta</h1>
            <p>Crie sua conta nomelhor portal de notícias tech da internet!</p>
          </div>

          <ContainerInputForm error={errors}>
            <input
              {...register("username", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Seu nome"
            />
            <User size={24} color="#757575" />
            {errors?.username?.type === "required" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>Você precisa informar seu apelido.</span>{" "}
              </div>
            )}
          </ContainerInputForm>

          <ContainerInputForm error={errors}>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Seu e-mail"
            />
            <EnvelopeSimple size={24} color="#757575" />
            {errors?.email?.type === "required" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>Você precisa informar um E-mail.</span>{" "}
              </div>
            )}
            {error == "errorEmail" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>O e-mail é inválido ou já está em uso</span>{" "}
              </div>
            )}
          </ContainerInputForm>

          <ContainerInputForm error={errors}>
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Sua senha"
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
            {errors?.password?.type === "required" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>Você precisa definir uma senha.</span>{" "}
              </div>
            )}
            {errors?.password?.type === "minLength" && (
              <div>
                {" "}
                <Warning size={24} /> <span>Minímo de 8 caracteres</span>{" "}
              </div>
            )}
            {errors?.password?.type === "pattern" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>Letras maiúsculas, minúsculas, números e símbolos.</span>{" "}
              </div>
            )}
          </ContainerInputForm>

          <ContainerInputForm error={errors}>
            <input
              {...register("passwordConfirmed", { required: true })}
              type="password"
              placeholder="Confirme sua senha"
            />
            <Keyhole size={24} color="#757575" />
            {errors?.passwordConfirmed?.type === "required" && (
              <div>
                {" "}
                <Warning size={24} />{" "}
                <span>Você precisa confirmar sua senha.</span>
              </div>
            )}
            {error == "notPassword" && (
              <div>
                {" "}
                <Warning size={24} /> <span>As senhas não se coincidem</span>{" "}
              </div>
            )}
          </ContainerInputForm>

          <ContainerCheckForm error={errors}>
            <br />
            <h4>
              Ao se registrar, você aceita nossos <Link>termos</Link> de uso e a
              nossa <Link>política de privacidade</Link>.
            </h4>
          </ContainerCheckForm>

          <div>
            <ButtonDefault>CRIAR CONTA</ButtonDefault>
            <br />
            <bold>
              <Link to="../auth/login">
                <ArrowLeft size="24" color="#8A8AE0" />
                Voltar para o login
              </Link>
            </bold>
          </div>
        </FormStyled>
      </ContainerMain>
    );
  }

  if (status == "verifyEmail") {
    return <EmailVerification />;
  }

  return (
    <>{status == "emailVerified" ? <Navigate to="../home" /> : <Loader />}</>
  );
}
