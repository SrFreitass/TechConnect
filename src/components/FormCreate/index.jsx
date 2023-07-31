import { FormStyled, PasswordStyled } from './style';
import { CreateTeste } from './create';
import { useState, useEffect, useLayoutEffect, } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom';
import imageTypewriter from '../../assets/images/map-icon.svg'
import { ButtonStyled } from '../SectionMain/style';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { addDoc, doc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseconfig'

export function FormCreate() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [token, setToken] = useState('')
  const [componentReady, setComponentReady] = useState('');

  const onLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        localStorage.setItem("login", user)
      })
  }



  useEffect(() => {
    console.log('renderizou')
    const q = query(collection(db, "admin"), where("uuid", "==", localStorage.getItem("login")));
    const teste = (getDocs(q)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0].uuid
    })
    teste.then((res) => {
      setToken(res)
    })
      .catch((error) => {
        setComponentReady('error')
      })
  }, [])

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }


  if (localStorage.getItem("login") === token) {
    return <CreateTeste />
  } else if (componentReady === 'error') {
    return (
      <>
        <FormStyled>
          <img src={imageTypewriter} />
          <form>
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

            <ButtonStyled type="submit" onClick={onLogin}>ENTRAR</ButtonStyled>
          </form>
        </FormStyled>

      </>
    )
  } else {
    return <h1>Carregando</h1>
  }
}

