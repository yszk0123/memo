import React from 'react';
import styled from 'styled-components';

import { Menu, useMenuState } from '../Menu';

export default {
  title: 'molecules/Menu',
};

export const MenuStory: React.FunctionComponent = () => {
  const menuState = useMenuState();

  return (
    <>
      <SecondaryBox onClick={menuState.onOpen} />
      <Menu state={menuState}>
        <PrimaryBox />
      </Menu>
    </>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: var(--space);
`;

const PrimaryBox = styled(Box)`
  background: var(--color-button-primary);
  margin: var(--space);
`;

const SecondaryBox = styled(Box)`
  background: var(--color-button-secondary);
  margin: var(--space);
`;
