import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const ListItem = styled.div<Props>`
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--color-default--hover);
  }
`;
