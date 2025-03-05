import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${Colors.gray};
  padding: 40px 16px 0 16px;
  z-index: 1;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    color: ${Colors.white};
    text-align: center;
    line-height: 22px;
  }
`
export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.white};
  margin-bottom: 24px;

  span {
    color: ${Colors.lightGray};
    display: block;
    font-size: 12px;
  }
`
export const Quantity = styled.p`
  font-size: 16px;
  margin-top: 32px;
  font-weight: bold;
  color: ${Colors.white};
  margin-bottom: 24px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.white};
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${close});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
