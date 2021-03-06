import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Position } from '../../types/GeometoryType';
import { Paper } from '../atoms/Paper';
import { Portal } from '../atoms/Portal';

export enum MenuPlacement {
  LEFT_TOP = 'LEFT_TOP',
  LEFT_BOTTOM = 'LEFT_BOTTOM',
  RIGHT_TOP = 'RIGHT_TOP',
  RIGHT_BOTTOM = 'RIGHT_BOTTOM',
  BOTTOM = 'BOTTOM',
}

interface MenuProps extends React.ComponentPropsWithoutRef<typeof Paper> {
  placement?: MenuPlacement;
  state: MenuState;
}

export const Menu: React.FunctionComponent<MenuProps> = ({
  state: { isOpen, position, onClose },
  ...props
}) => {
  return <BareMenu {...props} isOpen={isOpen} position={position} onClose={onClose} />;
};

export interface MenuState {
  isOpen: boolean;
  position: Position | null;
  onOpen: (event: React.MouseEvent) => void;
  onClose: () => void;
}

export function useMenuState(): MenuState {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const onOpen = useCallback((event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    setPosition({ x, y });
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return useMemo(() => ({ isOpen, position, onOpen, onClose }), [
    isOpen,
    position,
    onOpen,
    onClose,
  ]);
}

interface Props extends React.ComponentPropsWithoutRef<typeof Paper> {
  isOpen: boolean;
  position: Position | null;
  placement?: MenuPlacement;
  onClose?: () => void;
}

const BareMenu: React.FunctionComponent<Props> = ({
  isOpen,
  position,
  placement = MenuPlacement.RIGHT_BOTTOM,
  onClose,
  ...props
}) => {
  const style = useMemo(() => {
    return position !== null ? { left: position.x, top: position.y } : undefined;
  }, [position]);

  return (
    <Portal selector="#modal">
      {isOpen && <Sheet onClick={onClose} />}
      <MainWrapper
        className={classNames({
          hidden: !isOpen,
          leftTop: placement === MenuPlacement.LEFT_TOP,
          leftBottom: placement === MenuPlacement.LEFT_BOTTOM,
          rightTop: placement === MenuPlacement.RIGHT_TOP,
          rightBottom: placement === MenuPlacement.RIGHT_BOTTOM,
          bottom: placement === MenuPlacement.BOTTOM,
        })}
        style={style}
      >
        <Main {...props} />
      </MainWrapper>
    </Portal>
  );
};

const Sheet = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0;
`;

const MainWrapper = styled(Paper)`
  position: absolute;
  background-color: var(--color-menu-bg);
  transition: transform var(--transition), opacity var(--transition);
  opacity: 1;
  pointer-events: auto;

  &.leftTop {
    transform: translate(-100%, -100%);
    &.hidden {
      transform: translate(calc(var(--menu-offset-x) - 100%), calc(var(--menu-offset-y) - 100%));
    }
  }
  &.leftBottom {
    transform: translate(-100%, 0);
    &.hidden {
      transform: translate(calc(var(--menu-offset-x) - 100%), calc(-1 * var(--menu-offset-y)));
    }
  }
  &.rightTop {
    transform: translate(0, -100%);
    &.hidden {
      transform: translate(calc(-1 * var(--menu-offset-x)), calc(var(--menu-offset-y) - 100%));
    }
  }
  &.rightBottom {
    transform: translate(0, 0);
    &.hidden {
      transform: translate(calc(-1 * var(--menu-offset-x)), calc(-1 * var(--menu-offset-y)));
    }
  }
  &.bottom {
    transform: translate(-50%, 0);
    &.hidden {
      transform: translate(calc(-50%), calc(-1 * var(--menu-offset-y)));
    }
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const Main = styled.div`
  position: relative;
`;
