import { Wrapper } from '../../../Styles/Wrapper'
import { Header } from '../../Header'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FormStyled, ContainerInputForm, ContainerCheckForm, ProgressForm, InputPassword } from './style'
import { ButtonDefault } from '../../ArticleComposer/style'
import { Eye, EyeClosed, Warning } from '@phosphor-icons/react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from '../../../services/firebaseconfig'
import { useState } from 'react'
import { EmailVerification } from '../EmailVerification'
import { FirebaseError } from 'firebase/app'


export function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [status, setStatus] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleSubmitRegister = async (data) => {
        if (data.password === data.passwordConfirmed) {
            try {
                await createUserWithEmailAndPassword(auth, data.email, data.password)
                console.log('conta criada')
                await sendEmailVerification(auth.currentUser)
                updateProfile(auth.currentUser, {
                    displayName: data.username
                })
                setStatus(true)
                setError('no')
            } catch (error) {
                setError('errorEmail')
                console.log(error.code)
                console.log('O e-mail é inválido ou já está em uso')
            }
            return
        }

        if (data.password != data.passwordConfirmed)
            setError('notPassword')
    }



    const handleVisiblePassword = () => {
        setShowPassword((state) => !state)
    }


    if (status == false) {
        return (
            <>
                <ProgressForm value="20" max="100" />
                <FormStyled onSubmit={handleSubmit((data) => handleSubmitRegister(data))}>
                    <div>
                        <h1>REGISTRO</h1>
                        <p>Registre-se ao melhor portal de notícias tech da internet!</p>
                    </div>

                    <ContainerInputForm error={errors}>
                        <label>Usuário</label>
                        <input {...register("username", { required: true, maxLength: 20 })} type="text" placeholder='Insira seu apelido' />
                        {errors?.username?.type === 'required' && <div> <Warning size={24} /> <span>Você precisa informar seu apelido.</span> </div>}
                    </ContainerInputForm>

                    <ContainerInputForm error={errors}>
                        <label>E-mail</label>
                        <input {...register("email", { required: true })} type="text" placeholder='Insira seu email' />
                        {errors?.email?.type === 'required' && <div> <Warning size={24} /> <span>Você precisa informar um E-mail.</span> </div>}
                        {error == 'errorEmail' && <div> <Warning size={24} /> <span>O e-mail é inválido ou já está em uso</span> </div>}
                    </ContainerInputForm>

                    <InputPassword error={errors}>
                        <label>Senha</label>
                        <div>
                            <input {...register("password", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ })} type={showPassword ? 'text' : 'password'} placeholder='Insira sua senha' />
                            {showPassword ? <Eye size={24} onClick={handleVisiblePassword} /> : <EyeClosed size={24} onClick={handleVisiblePassword} />}
                        </div>
                        {errors?.password?.type === 'required' && <div> <Warning size={24} /> <span>Você precisa definir uma senha.</span> </div>}
                        {errors?.password?.type === 'minLength' && <div> <Warning size={24} /> <span>Minímo de 8 caracteres</span> </div>}
                        {errors?.password?.type === 'pattern' && <div> <Warning size={24} /> <span>Letras maiúsculas, minúsculas, números e símbolos.</span> </div>}
                    </InputPassword>

                    <ContainerInputForm error={errors}>
                        <label>Confirmar senha</label>
                        <input {...register("passwordConfirmed", { required: true })} type='password' placeholder='Confirme sua senha' />
                        {errors?.passwordConfirmed?.type === 'required' && <div> <Warning size={24} /> <span>Você precisa confirmar sua senha.</span></div>}
                        {error == 'notPassword' && <div> <Warning size={24} /> <span>As senhas não se coincidem</span> </div>}
                    </ContainerInputForm>


                    <ContainerCheckForm error={errors}>
                        <input {...register("termsAccept", { required: true })} type="checkbox" />
                        <label>Aceito os <Link>termos</Link> da TechConnect e da ConnectionXS</label>
                    </ContainerCheckForm>




                    <ButtonDefault>CRIAR CONTA</ButtonDefault>
                    <p>Já tem uma conta? <Link to="/auth/login">Logue aqui</Link></p>
                </FormStyled>
            </>
        )
    } else {
        return (
            <EmailVerification status={status} setStatus={setStatus} />
        )
    }
}