import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { GlobalStyle } from '../src/components/core/GlobalStyle';
import styled from 'styled-components';

import './hacks/nextRouterMock';

// automatically import all files ending in *.stories.{ts,tsx}
configure(require.context('../src/components', true, /\.stories\.tsx?$/), module);

const GlobalStyleDecorator = storyFn => {
  return (
    <>
      <Wrapper>{storyFn()}</Wrapper>
      <GlobalStyle />
    </>
  );
};

const Wrapper = styled.div`
  font-size: var(--font-md);
`;

addDecorator(GlobalStyleDecorator);

addDecorator(withKnobs);
