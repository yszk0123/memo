import NextLink, { LinkProps } from 'next/link';
import React from 'react';

export const PrefixedLink: React.FunctionComponent<LinkProps> = props => {
  return (
    <NextLink {...props} as={`${process.env.REACT_APP_URL_PREFIX}${props.as || props.href}`} />
  );
};
