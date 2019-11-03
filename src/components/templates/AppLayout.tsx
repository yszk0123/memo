import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useUserLogin, useUserLogout, useUserStatusSubscribe } from '../../redux/hooks/userHooks';
import { selectors } from '../../redux/selectors';
import { Layout } from '../core/Layout';

interface Props {}

export const AppLayout: React.FunctionComponent<Props> = ({ children }) => {
  const user = useTypedSelector(selectors.user);
  const userLogin = useUserLogin();
  const userLogout = useUserLogout();

  useUserStatusSubscribe();

  return <Layout user={user} onLogin={userLogin} onLogout={userLogout} />;
};
