import { useState } from 'react'
import { HeaderContainer } from './style'
import { FacebookLogo, InstagramLogo, List, TwitterLogo, X } from '@phosphor-icons/react'
import { Search } from './Search'

export function Header() {
  const [menu, setMenu] = useState(false)


  const handleMenu = () => {
    setMenu(!menu)
    menu ? document.documentElement.style.overflow = 'auto' : document.documentElement.style.overflow = 'hidden'
    console.log(document.documentElement)
  }

  console.log(menu)

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
              <input placeholder='O que deseja procurar?' />
              <br />
              <li><strong>Categorias</strong></li>
              <li>Fast</li>
              <li>Jogos</li>
              <li>Computação</li>
              <li>Tecnologia</li>
              <li>Empreendendorismo</li>
              <li><strong>Outros</strong></li>
              <li>Artigos</li>
              <li>Sobre nós</li>
            </ul>
          </div>

          <ul>
            <li><FacebookLogo size={32} /></li>
            <li><InstagramLogo size={32} /></li>
            <li><TwitterLogo size={32} /></li>
          </ul>


        </nav>




      </HeaderContainer >
    </>
  )
}
