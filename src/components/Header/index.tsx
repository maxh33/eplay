import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/shopping-cart.svg'

import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.HamburgerMenu>
          <HashLink
            title="Clique aqui para voltar para a página inicial"
            to="/#home"
          >
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </HashLink>
          <nav>
            <S.Links>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para voltar para a página inicial"
                  to="/#home"
                >
                  Página inicial
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para ver as categorias"
                  to="/categories"
                >
                  Categorias
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para ver as promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span> - produto(s) </span>
          <img src={cartIcon} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para voltar para a página inicial"
              to="/#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Página inicial
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para ver as categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para ver as promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
