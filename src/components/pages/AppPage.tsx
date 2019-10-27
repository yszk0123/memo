import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actions } from '../../redux/actions';
import { selectors } from '../../redux/selectors';
import { noop } from '../../utils/noop';

interface Props {}

export const AppPage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const user = useTypedSelector(selectors.user);

  const handleDeselect = useCallback(() => {
    // FIXME
    dispatch(actions.NOTE_ADD());
  }, []);

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  return (
    <div className="App" onClick={handleDeselect}>
      <p>{user !== null ? `Hello, ${user.id}!` : 'Hello'}</p>
    </div>
  );
};
