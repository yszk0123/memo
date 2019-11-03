import { action } from '@storybook/addon-actions';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useRectangle } from '../../../hooks/useRectangle';
import { Position } from '../../../types/GeometoryType';
import { Menu } from '../Menu';

export default {
  title: 'molecules/Menu',
};

export const MenuStory: React.FunctionComponent = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const rect = useRectangle(ref);
  const position = useMemo<Position | null>(
    () => (rect != null ? { x: rect.x, y: rect.y } : null),
    [rect],
  );
  return (
    <>
      <SecondaryBox />
      <SecondaryBox ref={setRef}>
        <button onClick={action('press')}>press</button>
      </SecondaryBox>
      <SecondaryBox />
      <Menu isOpen position={position}>
        <PrimaryBox />
        <PrimaryBox />
      </Menu>
    </>
  );
};

export const MenuWithMouseStory: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const handleClick = useCallback((event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    setPosition({ x, y });
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <SecondaryBox onClick={handleClick} />
      <Menu isOpen={isOpen} position={position} onClose={handleClose}>
        <PrimaryBox />
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

const SecondaryBox = styled(Box)`
  background: var(--color-button-secondary);
  margin: var(--space);
`;

const PrimaryBox = styled(Box)`
  background: var(--color-button-primary);
  margin: var(--space);
`;
