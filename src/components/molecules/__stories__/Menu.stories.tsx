import { select } from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';

import { Menu, MenuPlacement, useMenuState } from '../Menu';

export default {
  title: 'molecules/Menu',
};

export const MenuStory: React.FunctionComponent = () => {
  const placement = select(
    'placement',
    {
      LeftTop: MenuPlacement.LEFT_TOP,
      LeftBottom: MenuPlacement.LEFT_BOTTOM,
      RightTop: MenuPlacement.RIGHT_TOP,
      RightBottom: MenuPlacement.RIGHT_BOTTOM,
      Bottom: MenuPlacement.BOTTOM,
    },
    MenuPlacement.RIGHT_BOTTOM,
  );
  const menuState = useMenuState();

  return (
    <div>
      <SecondaryBox onClick={menuState.onOpen} />
      <Menu placement={placement ?? undefined} state={menuState}>
        <PrimaryBox>{placement}</PrimaryBox>
      </Menu>
    </div>
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
