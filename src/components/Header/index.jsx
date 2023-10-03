import { useState, useEffect, useRef } from 'react'
import { HeaderContainer } from './style'
import { FacebookLogo, InstagramLogo, List, Popcorn, TwitterLogo, UserCircle, X } from '@phosphor-icons/react'
import { Search } from './Search'
import { auth } from '../../services/firebaseconfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

export function Header() {
  const [menu, setMenu] = useState(false)
  const [user, setUser] = useState('')
  const popup = useRef()
  const { currentUser } = auth


  const handleMenu = () => {
    setMenu(!menu)
    menu ? document.documentElement.style.overflow = 'auto' : document.documentElement.style.overflow = 'hidden'
    console.log(document.documentElement)
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      location.reload()
      return
    } catch {
      console.log('Algo deu errado.')
    }
  }
  
  

  return (
    <>

      <HeaderContainer menu={menu} setMenu={setMenu}>
        <span>&#60;techconnect/&#62;</span>
        <span>&#60;/&#62;</span>

        <nav>
          <ul>
            <li><a href="#">Artigos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Fast</a></li>
            <Search />
          </ul>

          <div>
            {menu ? <X size='32' color='#757575' onClick={handleMenu} /> : <List size='32' color='#757575' onClick={handleMenu} />}
            <ul>
              <X size='32' color='#757575' onClick={handleMenu} />
              <br />
              <Search />
              <li><strong>Categorias</strong></li>
              <li><Link to="home/fast/home"  onClick={handleMenu}>Fast</Link></li>
              <li><Link to="../category/jogos" onClick={handleMenu}>Jogos</Link></li>
              <li><Link to="../category/computacao" onClick={handleMenu}>Computação</Link></li>
              <li><Link to="../category/tecnologia" onClick={handleMenu}>Tecnologia</Link></li>
              <li><Link to="../category/empreendendorismo" onClick={handleMenu}>Empreendendorismo</Link></li>
              <li><strong>Outros</strong></li>
              <li><Link to="../home"  onClick={handleMenu} >Artigos</Link></li>
              <li>Sobre nós</li>
              <br />
              <li><Link to={ currentUser ? '../account' : '../auth/login'}><UserCircle size={32}/>{currentUser ? currentUser.displayName : 'Faça login' }</Link></li>
            </ul>
          </div>

          

          <ul>
            <li><FacebookLogo size={32} /></li>
            <li><InstagramLogo size={32} /></li>
            <li><TwitterLogo size={32} /></li>
            <div>
            <li><UserCircle size={32}/></li>
            <li>{currentUser ? <button onClick={handleSignOut}>Sair</button> :  <button><Link to="../auth/login">Entrar</Link></button>}</li>
            </div>  
          </ul>


        </nav>

      </HeaderContainer >
    </>
  )
}
