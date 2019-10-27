import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { actions } from '../../redux/actions';
import { noop } from '../../utils/noop';

interface Props {}

export const AppPage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

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
      Hello
    </div>
  );
};
