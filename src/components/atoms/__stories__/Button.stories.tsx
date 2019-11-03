import { action } from '@storybook/addon-actions';
import React from 'react';
import { DefaultButton, PrimaryButton, SecondaryButton } from '../Button';

export default {
  title: 'atoms/Button',
};

export const defaultButton = () => (
  <DefaultButton onClick={action('clicked')}>Button</DefaultButton>
);

export const primaryButton = () => (
  <PrimaryButton onClick={action('clicked')}>Button</PrimaryButton>
);

export const secondaryButton = () => (
  <SecondaryButton onClick={action('clicked')}>Button</SecondaryButton>
);
