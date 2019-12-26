import { createGlobalStyle } from 'styled-components'

import Quantico from './fonts/quantico.ttf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "OverSpray";
    src: url('${Quantico}');
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: "OverSpray", sans-serif;
  }
`

export default GlobalStyles
