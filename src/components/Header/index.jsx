import React from 'react'
import { HeaderContainer } from './style'
import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react'
import { Search } from '../Search'

export function Header() {
  return (
    <HeaderContainer>
      <h1>&#60;techconnect/&#62;</h1>
      <nav>
        <ul>
          <li><a href="#">Artigos</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Fast</a></li>
          <Search />
        </ul>

        <ul>
          <li><FacebookLogo size={32} /></li>
          <li><InstagramLogo size={32} /></li>
          <li><TwitterLogo size={32} /></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
