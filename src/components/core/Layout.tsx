import React from 'react';
import styled from 'styled-components';

import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';
import { InitialAvatar } from '../atoms/Avatar';
import { DefaultButton } from '../atoms/Button';
import { List } from '../atoms/List';
import { ListItem, TouchableListItem } from '../atoms/ListItem';
import { HeadingLink } from '../atoms/TextLink';
import { Menu, MenuPlacement, useMenuState } from '../molecules/Menu';
import { GlobalStyle } from './GlobalStyle';

const DEFAULT_DISPLAY_NAME = '-';

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
                <UserAvatar
                  text={user.displayName || DEFAULT_DISPLAY_NAME}
                  onClick={menuState.onOpen}
                />
                <Menu placement={MenuPlacement.LEFT_BOTTOM} state={menuState}>
                  <List>
                    <ListItem>
                      <SecondaryText>Logged in as {user.displayName}</SecondaryText>
                    </ListItem>
                    <TouchableListItem>
                      <Text onClick={onLogout}>Logout</Text>
                    </TouchableListItem>
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

const UserAvatar = styled(InitialAvatar)`
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--color-default--hover);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-button-primary);
  padding: var(--space) calc(var(--space) * 2);
  color: var(--color-button-primary-text);
  box-shadow: 0 1px 1px 0 var(--color-shadow);
  width: 100%;
  height: var(--header-height);
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

const LoginButton = styled(DefaultButton)`
  margin-left: var(--space);
`;

const Text = styled.p`
  white-space: nowrap;
  font-size: var(--font-md);
  margin: 0;
  padding: var(--space) calc(var(--space) * 2);
`;

const SecondaryText = styled(Text)`
  color: var(--color-secondary-text);
`;
