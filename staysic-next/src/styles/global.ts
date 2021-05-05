import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background: ${props => props.theme.colors.background};
    background-image: url('/assets/nona vermelho 1.svg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 35%;
    color: ${props => props.theme.colors.text};
    font: 400 12px 'Courier Prime', sans-serif;
  }
`
