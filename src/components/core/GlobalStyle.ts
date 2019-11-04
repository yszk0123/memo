import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
  }

  /* Apply border-box to all elements */
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Variables */
  :root {
    --space: 8px;
    --radius: 4px;
    --border-width: 1px;
    --opacity--hover: 0.4;
    --menu-offset-x: calc(var(--space) / 2);
    --menu-offset-y: calc(var(--space));
    --fab-size: 48px;
    --avatar-size: 36px;
    --header-height: 52px;

    --font-sm: 1.4rem;
    --font-md: 1.6rem;
    --font-lg: 1.8rem;

    --transition: 0.16s ease-out;

    /* @see https://material-ui.com/customization/color/#color-palette */
    --palette-white: #ffffff;
    --palette-blue-200: #90caf9;
    --palette-blue-300: #64b5f6;
    --palette-blue-400: #90caf9;
    --palette-blue-500: #42a5f5;
    --palette-pink-200: #f48fb1;
    --palette-pink-300: #f06292;
    --palette-pink-400: #ec407a;
    --palette-pink-500: #e91e63;
    --palette-pink-a100: #ff80ab;
    --palette-pink-a200: #ff4081;
    --palette-pink-a400: #f50057;

    --palette-grey-50: #fafafa;
    --palette-grey-100: #f5f5f5;
    --palette-grey-200: #eeeeee;
    --palette-grey-300: #e0e0e0;
    --palette-grey-400: #bdbdbd;
    --palette-grey-500: #9e9e9e;
    --palette-grey-600: #757575;
    --palette-grey-700: #616161;
    --palette-grey-800: #424242;
    --palette-grey-900: #212121;

    --color-shadow: rgba(0, 0, 0, 0.1);
    --color-default: var(--palette-white);
    --color-default--hover: var(--palette-grey-200);
    --color-text: var(--palette-grey-900);
    --color-secondary-text: var(--palette-grey-500);
    --color-dim: var(--palette-grey-100);
    --color-disabled: var(--palette-grey-200);
    --color-button-default: var(--palette-white);
    --color-button-default-hover: var(--palette-grey-200);
    --color-button-default-active: var(--palette-grey-300);
    --color-button-default-text: var(--palette-grey-900);
    --color-button-primary: var(--palette-blue-500);
    --color-button-primary-hover: var(--palette-blue-300);
    --color-button-primary-active: var(--palette-blue-200);
    --color-button-primary-text: var(--palette-white);
    --color-button-secondary: var(--palette-pink-a400);
    --color-button-secondary-hover: var(--palette-pink-300);
    --color-button-secondary-active: var(--palette-pink-200);
    --color-button-secondary-text: var(--palette-white);
    --color-button-secondary-text--reverse: var(--palette-grey-500);
    --color-sheet: var(--palette-grey-900);
    --color-loading: var(--palette-blue-500);
    --color-menu-bg: var(--palette-white);
  }
`;
