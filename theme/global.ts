import {normalize} from 'polished';
import {createGlobalStyle} from './';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({theme}) => theme.typography.primaryFontFamily};
    color: #2b2b3c;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;
