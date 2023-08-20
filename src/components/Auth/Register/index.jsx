import { Wrapper } from '../../../Styles/Wrapper'
import { Header } from '../../Header'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FormStyled, ContainerInputForm, ContainerCheckForm, ProgressForm}  from './style'
import { ButtonDefault } from '../../ArticleCreationForm/style'
import { Warning } from '@phosphor-icons/react'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../../../firebaseconfig'
import { useState } from 'react'
import { EmailVerification } from '../EmailVerification'


export function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ status, setStatus ] = useState(false)
    console.log(errors)


    
    
    const handleSubmitRegister = async (data) => {
        
        if(data.password === data.passwordConfirmed) {
            createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
                sendEmailVerification(auth.currentUser).then(() => {
                setStatus(true)
            })
    })
    }
    }

    console.log(status)

    if(status == false) {
    return (
        <>        
            <ProgressForm value="20" max="100"/>
            <FormStyled onSubmit={handleSubmit((data) => handleSubmitRegister(data))}>
                <div>
                    <h1>REGISTRO</h1>
                    <p>Registre-se ao melhor portal de notícias tech da internet!</p>
                </div>

                <ContainerInputForm error={errors}>
                    <label>Usuário</label>
                    <input {...register("username", { required: true, maxLength: 20 })} placeholder='Insira seu apelido'/>
                    {errors?.username?.type === 'required' && <div> <Warning size={24}/> <span>Você precisa informar seu apelido.</span> </div>}
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <label>E-mail</label>
                    <input {...register("email", { required: true })} type="email" placeholder='Insira seu email'/>
                    {errors?.email?.type === 'required' && <div> <Warning size={24}/> <span>Você precisa informar um E-mail.</span> </div> }
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <label>Senha</label>
                    <input {...register("password", { required: true })} type="password" placeholder='Insira sua senha'/>
                    {errors?.password?.type === 'required' && <div> <Warning size={24}/> <span>Você precisa definir uma senha.</span> </div> }
                </ContainerInputForm>

                <ContainerInputForm error={errors}>
                    <label>Confirmar senha</label>
                    <input {...register("passwordConfirmed", { required: true })} type="password" placeholder='Confirme sua senha'/>
                    {errors?.passwordConfirmed?.type === 'required' && <div> <Warning size={24}/> <span>Você precisa confirmar sua senha.</span></div> }
                </ContainerInputForm>

                <ContainerCheckForm error={errors}>
                    <input {...register("save", { required: false })} type="checkbox"/>
                    <label>Lembrar de mim</label>
                </ContainerCheckForm>

                <ContainerCheckForm error={errors}>
                    <input {...register("termsAccept", { required: true })} type="checkbox"/>
                    <label>Aceito os <Link>termos</Link> da TechConnect e da ConnectionXS</label>
                </ContainerCheckForm>




                <ButtonDefault>CRIAR CONTA</ButtonDefault>
            </FormStyled>
        </>
    )
    } else {
        return (
        <EmailVerification status={status} setStatus={setStatus}  />
        )
    }
}