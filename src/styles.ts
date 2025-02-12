import { createGlobalStyle } from 'styled-components'

const Colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
    }
`
