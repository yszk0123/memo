/**
 * Example
 */
import { action } from '@storybook/addon-actions';
import React from 'react';

import { DefaultButton, PrimaryButton } from '../../atoms/Button';
import { select2 } from '../select2';

export const Select2ExampleStory: React.FunctionComponent = () => {
  const element = select2(
    'Button',
    {
      Default: <DefaultButton onClick={action('onClick')}>button</DefaultButton>,
      Primary: <PrimaryButton onClick={action('onClick')}>button</PrimaryButton>,
    },
    'Default',
  );
  return <div>{element}</div>;
};
