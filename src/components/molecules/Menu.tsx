import React from 'react';
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

export const Menu: React.FunctionComponent<Props> = ({
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
  transition: opacity var(--transition);
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

const Main = styled.div`
  position: relative;
`;
