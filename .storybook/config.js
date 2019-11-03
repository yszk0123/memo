import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/components/organisms/GlobalStyle';

// automatically import all files ending in *.stories.{ts,tsx}
configure(require.context('../src/components', true, /\.stories\.tsx?$/), module);

const GlobalStyleDecorator = storyFn => {
  return (
    <>
      {storyFn()}
      <GlobalStyle />
    </>
  );
};

addDecorator(GlobalStyleDecorator);
