import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actions } from '../../redux/actions';
import { selectors } from '../../redux/selectors';
import { noop } from '../../utils/noop';
import { Button } from '../atoms/Button';
import { Layout } from '../organisms/Layout';

interface Props {}

export const AppPage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const user = useTypedSelector(selectors.user);

  const handleLogin = useCallback(() => {
    dispatch(actions.USER_LOGIN_REQUEST());
  }, [dispatch]);

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  if (user === null) {
    return (
      <Layout>
        <Button onClick={handleLogin}>Login</Button>
      </Layout>
    );
  }

  return (
    <Layout>
      <p>{user.displayName ? `Hello, ${user.id}!` : 'Hello'}</p>
    </Layout>
  );
};
