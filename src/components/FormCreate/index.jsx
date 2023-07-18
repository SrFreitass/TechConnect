import { FormStyled, PasswordStyled } from './style';
import { CreateTeste } from './create';
import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom';
import imageTypewriter from '../../assets/images/map-icon.svg'
import { ButtonStyled } from '../SectionMain/style';
import { Eye, EyeSlash } from '@phosphor-icons/react';

export function FormCreate() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onLogin = (e) => {

    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setUser(true)
      localStorage.setItem('user', 'true')
    })
    .catch(() => {
       
    })
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

    if (user || localStorage.getItem('user') === 'true') {
      return <CreateTeste/>
    } else {
        return (
          <>
          <FormStyled>
            <img src={imageTypewriter}/>
            <form>
              <h1>LOGIN</h1>

              <div>
              <label for="email">E-mail</label>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
              <label for="password">Senha</label>
              <PasswordStyled>
              <input type={showPassword ? 'text' : 'password'}  placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={handlePasswordChange}>{showPassword ? <Eye size={25}/> : <EyeSlash size={25}/>}</button>
              </PasswordStyled>
              </div>
            
              <ButtonStyled type="submit" onClick={onLogin}>ENTRAR</ButtonStyled>
            </form>
          </FormStyled>
          
        </>
        )
    }
}

