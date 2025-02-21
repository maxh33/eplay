import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block
  width: 100%;
  height: 480px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;


  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: ${Colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${Colors.black};
  max-width: 290px;
  font-weight: bold;
  color: ${Colors.white};
  font-size: 18px;
  line-height: 20px;
  border-radius: 8px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
