import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  margin-top: 40px;

  a,
  span {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0px;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const HamburgerMenu = styled.div`
  width: 32px;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${Colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
