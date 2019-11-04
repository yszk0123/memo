import { action } from '@storybook/addon-actions';
import React from 'react';

import { DefaultButton, PrimaryButton, SecondaryButton } from '../Button';

export default {
  title: 'atoms/Button',
};

export const DefaultButtonStory: React.FunctionComponent = () => (
  <DefaultButton onClick={action('clicked')}>Button</DefaultButton>
);

export const PrimaryButtonStory: React.FunctionComponent = () => (
  <PrimaryButton onClick={action('clicked')}>Button</PrimaryButton>
);

export const SecondaryButtonStory: React.FunctionComponent = () => (
  <SecondaryButton onClick={action('clicked')}>Button</SecondaryButton>
);
