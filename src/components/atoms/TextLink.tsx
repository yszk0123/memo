import NextLink, { LinkProps } from 'next/link';
import React from 'react';
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

export const HeadingLink: React.FunctionComponent<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <Heading>{children}</Heading>
    </NextLink>
  );
};

const Heading = styled.h3`
  cursor: pointer;
  transition: opacity var(--transition);
  margin: 0;

  :hover {
    opacity: var(--opacity--hover);
  }
`;
