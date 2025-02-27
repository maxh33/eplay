import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 16px;
`

export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`
export const LogoLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    margin-left: 16px;
  }
`
