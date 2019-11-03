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
  position: Position;
  mountAt?: HTMLElement;
  onClose?: () => void;
}

export const Menu: React.FunctionComponent<Props> = ({
  ref: _ref,
  position,
  mountAt,
  onClose,
  ...props
}) => {
  return ReactDOM.createPortal(
    <Outer>
      <Sheet onClick={onClose} />
      <MainWrapper style={{ left: position.x, top: position.y }} onClick={stop}>
        <Main {...props} />
      </MainWrapper>
    </Outer>,
    mountAt || document.body,
  );
};

const Outer = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const Sheet = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const MainWrapper = styled(Paper)`
  position: absolute;
  background-color: var(--color-menu-bg);
`;

const Main = styled.div`
  position: relative;
`;
