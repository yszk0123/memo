import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

export const TextLink: React.FunctionComponent<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <Text>{children}</Text>
    </NextLink>
  );
};

const Text = styled.p`
  cursor: pointer;
  transition: opacity var(--transition);

  :hover {
    opacity: var(--opacity--hover);
  }
`;
