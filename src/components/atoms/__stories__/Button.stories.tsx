import { action } from '@storybook/addon-actions';
import React from 'react';

import { DefaultButton, PrimaryButton, SecondaryButton } from '../Button';

export default {
  title: 'atoms/Button',
};

export const DefaultButtonStory = () => (
  <DefaultButton onClick={action('clicked')}>Button</DefaultButton>
);

export const PrimaryButtonStory = () => (
  <PrimaryButton onClick={action('clicked')}>Button</PrimaryButton>
);

export const SecondaryButtonStory = () => (
  <SecondaryButton onClick={action('clicked')}>Button</SecondaryButton>
);
