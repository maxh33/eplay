import { Link } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  HamburgerMenu,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
          <Link to="/">
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/#home">Página inicial</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/#on-sale">Promoções</Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - produto(s) </span>
          <img src={cart} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/#home">Página inicial</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/#on-sale">Promoções</Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
