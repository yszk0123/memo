import { LinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { PrefixedLink } from './PrefixedLink';

export const TextLink: React.FunctionComponent<LinkProps> = ({ children, ...props }) => {
  return (
    <PrefixedLink {...props}>
      <Text>{children}</Text>
    </PrefixedLink>
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
    <PrefixedLink {...props}>
      <Heading>{children}</Heading>
    </PrefixedLink>
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
