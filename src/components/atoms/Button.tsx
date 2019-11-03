import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent) => void;
}

const Button = styled.button<Props>`
  padding: var(--space);
  border-width: var(--border-width);
  border-radius: var(--radius);

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

export const DefaultButton = styled(Button)<Props>`
  background-color: var(--color-button-default);
  border-color: var(--color-button-default);

  &:hover {
    background-color: var(--color-button-default-hover);
    border-color: var(--color-button-default-hover);
  }
  &:active {
    background-color: var(--color-button-default-active);
    border-color: var(--color-button-default-active);
  }
`;

export const PrimaryButton = styled(Button)`
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

export const SecondaryButton = styled(Button)`
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
