import React from 'react';
import styled from 'styled-components';
import css from 'styled-jsx/css';
import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';

interface Props {
  user: User | null;
}

export const AppLayout: React.FunctionComponent<Props> = ({ user, children }) => {
  return (
    <Container>
      <Header>
        <p>{APP_NAME}</p>
        {user !== null && <p>{user.displayName}</p>}
      </Header>
      <Content>{children}</Content>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {variables}
      </style>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  font-size: var(--font-md);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-button-primary);
  padding: var(--space);
  color: var(--color-button-primary-text);
  box-shadow: 0 1px 1px 0 var(--color-shadow);
  width: 100%;
`;

const Content = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: var(--space);
`;

const reset = css.global`
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
`;

const variables = css.global`
  :root {
    --space: 8px;
    --radius: 4px;
    --border-width: 1px;

    --font-sm: 1.4rem;
    --font-md: 1.6rem;
    --font-lg: 1.8rem;

    --transition-delay: 0.2s;

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
  }
`;
