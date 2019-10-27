import { useCallback } from 'react';
import { actions } from '../redux/actions';
import { Dispatch } from '../types/ReduxType';
import { KeyCode } from '../utils/Keyboard';
import { useGlobalKeyboard } from './useGlobalKeyboard';

interface Options {
  dispatch: Dispatch;
  onAdd: () => void;
  onSave: () => void;
}

export function useGlobalKeyboardShortcut({ dispatch, onAdd, onSave }: Options) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === KeyCode.KEY_A) {
        onAdd();
      } else if (event.code === KeyCode.BACKSPACE) {
        dispatch(actions.NOTE_ADD());
      } else if (event.code === KeyCode.ESCAPE) {
        // dispatch(actions.NOTE_DESELECT());
      } else if ((event.ctrlKey || event.metaKey) && event.code === KeyCode.KEY_S) {
        onSave();
      } else {
        return;
      }
      event.preventDefault();
    },
    [dispatch, onAdd, onSave],
  );

  useGlobalKeyboard({ onKeyDown });
}
