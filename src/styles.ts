import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightGray: '#A3A3A3',
  green: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 80%;
      }
    }
  `
