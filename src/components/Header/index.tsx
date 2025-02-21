import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, LogoLink } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

const Header = () => {
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
      <LinkCart href="/product/:id">
        0 - produto(s)
        <img src={cart} alt="Carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
