import React from 'react';
import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';

interface Props {
  user: User | null;
}

export const AppLayout: React.FunctionComponent<Props> = ({ user, children }) => {
  return (
    <div className="AppLayout">
      <header className="AppLayout__header">
        <p>{APP_NAME}</p>
        {user !== null && <p>{user.displayName}</p>}
      </header>
      <main className="AppLayout__content">{children}</main>
    </div>
  );
};
