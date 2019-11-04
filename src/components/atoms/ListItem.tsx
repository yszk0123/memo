import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const TouchableListItem = styled.div<Props>`
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--color-default--hover);
  }
`;

export const ListItem = styled.div<Props>``;
