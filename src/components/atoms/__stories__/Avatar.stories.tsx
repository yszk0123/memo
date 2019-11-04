import React from 'react';

import { Avatar } from '../Avatar';
import { CenterBox } from '../Box';

export default {
  title: 'atoms/Avatar',
};

export const AvatarStory: React.FunctionComponent = () => (
  <Avatar>
    <CenterBox>A</CenterBox>
  </Avatar>
);
