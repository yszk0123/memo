import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useUserLogin, useUserLogout, useUserStatusSubscribe } from '../../redux/hooks/userHooks';
import { selectors } from '../../redux/selectors';
import { Layout } from '../core/Layout';

interface Props {
  center?: React.ReactNode;
}

export const AppLayout: React.FunctionComponent<Props> = ({ children, center }) => {
  const user = useTypedSelector(selectors.user);
  const userLogin = useUserLogin();
  const userLogout = useUserLogout();

  useUserStatusSubscribe();

  return (
    <Layout center={center} user={user} onLogin={userLogin} onLogout={userLogout}>
      {children}
    </Layout>
  );
};
