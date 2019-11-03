import React, { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Position } from '../../types/GeometoryType';
import { Paper } from '../atoms/Paper';

const stop = (event: React.SyntheticEvent): void => {
  event.stopPropagation();
  event.preventDefault();
};

interface Props extends React.Props<typeof Paper> {
  isOpen: boolean;
  position: Position | null;
  mountAt?: HTMLElement;
  onClose?: () => void;
}

const BareMenu: React.FunctionComponent<Props> = ({
  ref: _ref,
  isOpen,
  position,
  mountAt,
  onClose,
  ...props
}) => {
  return ReactDOM.createPortal(
    <>
      {isOpen && <Sheet onClick={onClose} />}
      <MainWrapper
        className={isOpen ? 'visible' : undefined}
        style={position ? { left: position.x, top: position.y } : undefined}
        onClick={stop}
      >
        <Main {...props} />
      </MainWrapper>
    </>,
    mountAt || document.body,
  );
};

interface MenuProps extends React.Props<typeof Paper> {
  state: MenuState;
}

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

export const Menu: React.FunctionComponent<MenuProps> = ({
  state: { isOpen, position, onClose },
  ...props
}) => {
  return <BareMenu {...props} isOpen={isOpen} position={position} onClose={onClose} />;
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
  opacity: 0;
  pointer-events: none;
  transform: translate(var(--menu-offset-x), var(--menu-offset-y));

  &.visible {
    opacity: 1;
    pointer-events: auto;
    transform: translate(0, 0);
  }
`;

const Main = styled.div`
  position: relative;
`;
