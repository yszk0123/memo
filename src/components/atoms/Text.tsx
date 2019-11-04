import styled from 'styled-components';

export const Text = styled.p`
  white-space: nowrap;
  font-size: var(--font-md);
  margin: 0;
  padding: var(--space) calc(var(--space) * 2);
`;

export const SecondaryText = styled(Text)`
  color: var(--color-secondary-text);
`;
