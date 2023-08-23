import { ContainerInputForm, FormStyled } from "../Register/style"
import { Wrapper } from '../../../Styles/Wrapper'
import { Header } from '../../Header'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonDefault } from '../../ArticleComposer/style'
import { Warning } from '@phosphor-icons/react'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../services/firebaseconfig'
import { useState } from 'react'
import { EmailVerification } from '../EmailVerification'
import { useNavigate } from "react-router-dom";


export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signError, setSignError] = useState(false)
    const navigate = useNavigate()

    console.log(errors)

    const handleSubmitLogin = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            setSignError(false)
            console.log('foi')
            return navigate("/home")
        } catch (error) {
            setSignError(true)
        }
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
                    <input {...register("email", { required: true })} type="email" placeholder='Insira seu email' />
                    {signError && <div> <Warning size={24} /> <span>E-mail não registrado.</span> </div>}
                    {errors?.email?.type == 'required' && <div> <Warning size={24} /> <span>Preencha os espaços em branco</span> </div>}
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <label>Senha</label>
                    <input {...register("password", { required: true })} type="password" placeholder='Insira sua senha' />
                    {signError && <div> <Warning size={24} /> <span>Senha incorrenta.</span> </div>}
                    {errors?.password?.type == 'required' && <div> <Warning size={24} /> <span>Preencha os espaços em branco</span> </div>}
                </ContainerInputForm>
                <ButtonDefault>ENTRAR</ButtonDefault>
                <p>Ainda não tem uma conta? <Link to="/auth/register">Registre-se aqui</Link></p>
            </FormStyled>
        </>
    )
}