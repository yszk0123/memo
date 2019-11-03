import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent) => void;
}

const Fab = styled.button<Props>`
  width: 48px;
  height: 48px;
  padding: var(--space);
  border-width: var(--border-width);
  border-radius: 50%;
  box-shadow: 0 2px 2px 1px var(--color-shadow);

  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
  &:disabled {
    background-color: var(--color-disabled);
    border-color: var(--color-disabled);
    cursor: default;
  }
`;

export const PrimaryFab = styled(Fab)`
  background-color: var(--color-button-primary);
  border-color: var(--color-button-primary);

  &:hover {
    background-color: var(--color-button-primary-hover);
    border-color: var(--color-button-primary-hover);
  }
  &:active {
    background-color: var(--color-button-primary-active);
    border-color: var(--color-button-primary-active);
  }
`;

export const SecondaryFab = styled(Fab)`
  background-color: var(--color-button-secondary);
  border-color: var(--color-button-secondary);

  :hover {
    background-color: var(--color-button-secondary-hover);
    border-color: var(--color-button-secondary-hover);
  }
  :active {
    background-color: var(--color-button-secondary-active);
    border-color: var(--color-button-secondary-active);
  }
`;
