import { action } from '@storybook/addon-actions';
import React from 'react';

import { Layout } from '../Layout';

export default {
  title: 'core/Layout',
};

export const LayoutStory = () => {
  return (
    <Layout user={null} onLogin={action('onLogin')} onLogout={action('onLogout')}>
      Content
    </Layout>
  );
};
