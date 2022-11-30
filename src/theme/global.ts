import {normalize} from 'polished';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    scroll-behavior: smooth;
  }

  body {
    color: #2b2b3c;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }

  input {
    accent-color: #2b2b3c;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
