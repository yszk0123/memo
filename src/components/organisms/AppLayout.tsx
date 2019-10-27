import React from 'react';
import { APP_NAME } from '../../constants';

interface Props {}

export const AppLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="AppLayout">
      <header className="AppLayout__header">{APP_NAME}</header>
      <main className="AppLayout__content">{children}</main>
    </div>
  );
};
