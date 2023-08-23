import { FormStyled, PasswordStyled } from './style';
import { useState, useEffect, useLayoutEffect, } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../services/firebaseconfig'
import imageTypewriter from '../../assets/images/map-icon.svg'
import { ButtonStyled } from '../SectionMain/style';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const onLogin = (e) => {
        console.log(e)
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user.uid;
            localStorage.setItem("token", user)
        }).catch((error) => {
            console.log('erro')
        })

    }



    const handlePasswordChange = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <FormStyled>
            <img src={imageTypewriter} />
            <form onSubmit={onLogin}>
                <h1>LOGIN</h1>

                <div>
                    <label for="email">E-mail</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label for="password">Senha</label>
                    <PasswordStyled>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handlePasswordChange}>{showPassword ? <Eye size={25} /> : <EyeSlash size={25} />}</button>
                    </PasswordStyled>
                </div>

                <ButtonStyled type="submit">ENTRAR</ButtonStyled>
            </form>
        </FormStyled>
    )
}