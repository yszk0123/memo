import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const Paper = styled.div<Props>`
  box-shadow: 0 1px 2px 1px var(--color-shadow);
`;
