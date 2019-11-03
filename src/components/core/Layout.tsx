import React from 'react';
import styled from 'styled-components';
import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';
import { DefaultButton, PrimaryButton } from '../atoms/Button';
import { TextLink } from '../atoms/TextLink';
import { GlobalStyle } from './GlobalStyle';

interface Props {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Layout: React.FunctionComponent<Props> = ({ children, user, onLogin, onLogout }) => {
  return (
    <Container>
      <Header>
        <Nav>
          <Left>
            <TextLink href="/">{APP_NAME}</TextLink>
          </Left>
          <Right>
            {user !== null ? (
              <>
                <p>{user.displayName}</p>
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
              </>
            ) : (
              <LoginButton onClick={onLogin}>Login</LoginButton>
            )}
          </Right>
        </Nav>
      </Header>
      <Content>{children}</Content>
      <GlobalStyle />
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
  background-color: var(--color-button-primary);
  padding: var(--space);
  color: var(--color-button-primary-text);
  box-shadow: 0 1px 1px 0 var(--color-shadow);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
`;

const Right = styled.div`
  align-items: center;
  display: flex;
`;

const LoginButton = styled(PrimaryButton)`
  margin: var(--space);
`;

const LogoutButton = styled(DefaultButton)`
  margin-left: var(--space);
`;
