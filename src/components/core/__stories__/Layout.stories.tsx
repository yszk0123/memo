import { action } from '@storybook/addon-actions';
import React from 'react';

import { User } from '../../../types/UserType';
import { Layout } from '../Layout';

export default {
  title: 'core/Layout',
};

export const LayoutWithLogoutStory: React.FunctionComponent = () => {
  return (
    <Layout user={null} onLogin={action('onLogin')} onLogout={action('onLogout')}>
      Content
    </Layout>
  );
};

export const LayoutWithLoginStory: React.FunctionComponent = () => {
  const user: User = { id: 'id-1', displayName: 'foo' };
  return (
    <Layout user={user} onLogin={action('onLogin')} onLogout={action('onLogout')}>
      Content
    </Layout>
  );
};
