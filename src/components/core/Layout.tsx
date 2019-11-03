import React from 'react';
import styled from 'styled-components';

import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';
import { DefaultButton } from '../atoms/Button';
import { List } from '../atoms/List';
import { ListItem } from '../atoms/ListItem';
import { HeadingLink } from '../atoms/TextLink';
import { Menu, MenuPlacement,useMenuState } from '../molecules/Menu';
import { GlobalStyle } from './GlobalStyle';

interface Props {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Layout: React.FunctionComponent<Props> = ({ children, user, onLogin, onLogout }) => {
  const menuState = useMenuState();

  return (
    <Container>
      <Header>
        <Nav>
          <Left>
            <HeadingLink href="/">{APP_NAME}</HeadingLink>
          </Left>
          <Right>
            {user !== null ? (
              <>
                <DisplayName onClick={menuState.onOpen}>{user.displayName}</DisplayName>
                <Menu placement={MenuPlacement.LEFT_BOTTOM} state={menuState}>
                  <List>
                    <ListItem>
                      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                    </ListItem>
                  </List>
                </Menu>
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
  padding: var(--space) calc(var(--space) * 2);
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

const DisplayName = styled.p`
  margin: 0;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
`;

const Right = styled.div`
  align-items: center;
  display: flex;
`;

const LoginButton = styled(DefaultButton)`
  margin-left: var(--space);
`;

const LogoutButton = styled(DefaultButton)`
  margin-left: var(--space);
`;
