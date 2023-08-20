import { ContainerInputForm, FormStyled } from "../Register/style"
import { Wrapper } from '../../../Styles/Wrapper'
import { Header } from '../../Header'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonDefault } from '../../ArticleCreationForm/style'
import { Warning } from '@phosphor-icons/react'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseconfig'
import { useState } from 'react'
import { EmailVerification } from '../EmailVerification'
import { useNavigate } from "react-router-dom";


export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signError, setSignError] = useState(false)
    const navigate = useNavigate()


    const handleSubmitLogin = async (data) => {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        setSignError(false)
        console.log('foi')
        return navigate("/home")
        

        .catch(() => {
            console.log('erro')
            setSignError(true)
        }) 
    }


    return (
        <>
            <FormStyled onSubmit={handleSubmit((data) => handleSubmitLogin(data))}>
                <div>
                    <h1>LOGIN</h1>
                    <p>TechConnect sempre sendo o melhor portal de notícias da internet!</p>
                </div>

                <ContainerInputForm error={errors}>
                    <label>E-mail</label>
                    <input {...register("email", { required: true })} type="email" placeholder='Insira seu email'/>
                    {signError && <div> <Warning size={24}/> <span>E-mail não registrado.</span> </div> }
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <label>Senha</label>
                    <input {...register("password", { required: true })} type="password" placeholder='Insira sua senha'/>
                    {signError && <div> <Warning size={24}/> <span>Senha incorrenta.</span> </div> }
                </ContainerInputForm>
                <ButtonDefault>ENTRAR</ButtonDefault>
                <p>Ainda não tem uma conta? <Link>Registre-se aqui</Link></p>
            </FormStyled>
        </>
    )
}