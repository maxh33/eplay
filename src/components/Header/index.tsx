import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LogoLink, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <LogoLink to="/">
          <img src={logo} alt="Eplay" />
        </LogoLink>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="/product/:id">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="/product/:id">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={cart} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
