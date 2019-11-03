import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Paper } from '../atoms/Paper';

interface Props extends React.Props<typeof Paper> {
  className?: string;
}

export const DialogContent = styled.div<Props>`
  width: 100%;
  flex-grow: 1;
`;

export const DialogActions = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Dialog: React.FunctionComponent<Props> = ({ ref: _ref, ...props }) => {
  return ReactDOM.createPortal(
    <Outer>
      <Sheet />
      <MainWrapper>
        <Main {...props} />
      </MainWrapper>
    </Outer>,
    document.body,
  );
};

const Outer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const Sheet = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: var(--color-sheet);
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Main = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 80%;
  height: 80%;
`;
