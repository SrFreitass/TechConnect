import { ContainerInputForm, FormStyled } from "../Register/style"
import { Wrapper } from '../../../Styles/Wrapper'
import { Header } from '../../Header'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonDefault } from '../../ArticleComposer/style'
import { EnvelopeSimple, Warning, Keyhole } from '@phosphor-icons/react'
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../services/firebaseconfig'
import { useState } from 'react'
import { EmailVerification } from '../EmailVerification'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"


export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signError, setSignError] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)
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

    const handleResetPassword = async (data) => {
        try {
            await sendPasswordResetEmail(auth, data.email)
            console.log('E-mail enviado')
            toast.success('E-mail de redefinição de senha enviado')
        } catch(e) {
            toast.error('Ocorreu algum erro no envio do E-mail de redefinição')
        }
    }

    if(resetPassword == false) {
    return (
        <>
            <FormStyled onSubmit={handleSubmit((data) => handleSubmitLogin(data))}>
                <div>
                    <h1>LOGIN</h1>
                    <p>TechConnect sempre sendo o melhor portal de notícias da internet!</p>
                </div>

                <ContainerInputForm error={errors}>
                    <input {...register("email", { required: true })} type="email" placeholder='E-mail' />
                    <EnvelopeSimple size={24} color="#757575" />
                    {signError && <div> <Warning size={24} /> <span>E-mail não registrado.</span> </div>}
                    {errors?.email?.type == 'required' && <div> <Warning size={24} /> <span>Preencha os espaços em branco</span> </div>}
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <input {...register("password", { required: true })} type="password" placeholder='Senha' />
                    <Keyhole size={24} color="#757575" />
                    <div><p>Esqueceu sua senha? <Link onClick={() => setResetPassword(true)}>Redefine sua senha</Link></p></div>
                    {signError && ( 
                    <>
                    <div> <Warning size={24} /> <span>Senha incorrenta.</span> </div> 
                    </>
                    )}
                    {errors?.password?.type == 'required' && <div> <Warning size={24} /> <span>Preencha os espaços em branco</span> </div>}
                </ContainerInputForm>
                <ButtonDefault>ENTRAR</ButtonDefault>
                <p>Ainda não tem uma conta? <Link to="/auth/register">Registre-se aqui</Link></p>
            </FormStyled>
        </>
    )
    } else {
        return (
            <>
                <Toaster
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{
                    loading: {
                        duration: 1000,
                    },
                }}
                />
                
                <FormStyled onSubmit={handleSubmit((data) => handleResetPassword(data))}>
                    <ContainerInputForm>
                    <input {...register("email", { required: true })} type="email" placeholder="Seu email" />
                    <ButtonDefault>Enviar e-mail de recuperação</ButtonDefault>
                    </ContainerInputForm>
                </FormStyled>
            </>
        )

    }
}