import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

function normalize() {
  return [
    {
      [`button,
        input,
        optgroup,
        select,
        textarea`]: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: '1.15',
        margin: '0',
        color: 'inherit'
      },

      [`button,
        input`]: {
        overflow: 'visible'
      },

      [`button,
        select`]: {
        textTransform: 'none'
      },

      [`button,
        html [type="button"],
        [type="reset"],
        [type="submit"]`]: {
        WebkitAppearance: 'button'
      },

      [`button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner`]: {
        borderStyle: 'none',
        padding: '0'
      },

      [`button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring`]: {
        outline: '1px dotted ButtonText'
      },

      [`[type="checkbox"],
        [type="radio"]`]: {
        boxSizing: 'border-box',
        padding: '0'
      },

      [`[type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button`]: {
        height: 'auto'
      },

      '[type="search"]': {
        WebkitAppearance: 'textfield',
        outlineOffset: '-2px'
      },

      '[type="search"]::-webkit-search-decoration': {
        WebkitAppearance: 'none'
      }
    }
  ];
}

export const globalStyles = css`
  @font-face {
    font-family: '${theme.fontFamily}';
    font-weight: ${theme.fontWeights.regular};
    font-style: normal;
    font-display: swap;
    src:  url('assets/fonts/${theme.fontFamily}-regular.woff2') format('woff2'),
         url('assets/fonts/${theme.fontFamily}-regular.woff') format('woff');
  }

  @font-face {
    font-family: '${theme.fontFamily}';
    font-weight: ${theme.fontWeights.medium};
    font-style: normal;
    font-display: swap;
    src: local('${theme.fontFamily}'), url('assets/fonts/${theme.fontFamily}-medium.woff2') format('woff2'),
        local('${theme.fontFamily}'), url('assets/fonts/${theme.fontFamily}-medium.woff') format('woff');
  }

  @font-face {
    font-family: '${theme.fontFamily}';
    font-weight: ${theme.fontWeights.bold};
    font-style: normal;
    font-display: swap;
    src: local('${theme.fontFamily}'), url('assets/fonts/${theme.fontFamily}-bold.woff2') format('woff2'),
        local('${theme.fontFamily}'), url('assets/fonts/${theme.fontFamily}-bold.woff') format('woff');
  }

  ${normalize()}

  *,
  :after,
  :before {
      box-sizing: border-box;
  }

  html,
  body,
  #app-root,
  .App-root {
    height: 100%;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    width: 100%;
     font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.grayBase};
    font-size: 16px;
    line-height: 32px;
  }

  /* Legacy */

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${theme.fontWeights.regular};
    font-kerning: normal;
  }

  p, ul, ol, dl, pre, table, blockquote {
    margin: 0 0 ${theme.spacing[4]};
    padding: 0;
  }

  b,
  strong {
    font-weight: ${theme.fontWeights.bold};
  }

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
    border: {
      width: 1px 0 0 0;
      color: ${theme.colors.blueLight};
      style: solid;
    };
  }

  /* img, a, div {
    -ms-interpolation-mode: bicubic;
    image-rendering: optimizeQuality;
  } */

  img {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:hover {
    cursor: pointer;
    outline: 0;
  }

  a,
  button {
    cursor: pointer;
    outline: 0;
    body.keynav-mode &:focus {
      box-shadow: 0 0 0 2px #adc4d3;
    }
  }

  ::selection {
    color: ${theme.colors.whiteBase};
    background: ${theme.colors.redBase};
  }

  /* Get rid of ugly autofill yellow
  http://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */
  input:-webkit-autofill {
    box-shadow: inset 0 0 0 999px #fff;
  }

  /* Disable certain ugly Webkit pseudos
  https://css-tricks.com/snippets/css/turn-off-number-input-spinners */
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button,
  input::-webkit-clear-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 1;
  }

  ::-moz-placeholder { color: ${theme.colors.grayPlaceholder}; opacity: 1; }
  :-ms-input-placeholder { color: ${theme.colors.grayPlaceholder}; }
  ::-webkit-input-placeholder { color: ${theme.colors.grayPlaceholder}; }
`;

export const GlobalStyle = createGlobalStyle`
   ${globalStyles}
`;
