import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const List = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-default);
`;
