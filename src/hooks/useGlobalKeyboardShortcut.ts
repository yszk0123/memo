import { useCallback } from 'react';

import { KeyCode } from '../utils/Keyboard';
import { useGlobalKeyboard } from './useGlobalKeyboard';

interface Options {
  onAdd: () => void;
  onSave: () => void;
}

export function useGlobalKeyboardShortcut({ onAdd, onSave }: Options): void {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === KeyCode.KEY_A) {
        onAdd();
      } else if (event.code === KeyCode.BACKSPACE) {
        // dispatch(actions.NOTE_ADD());
      } else if (event.code === KeyCode.ESCAPE) {
        // dispatch(actions.NOTE_DESELECT());
      } else if ((event.ctrlKey || event.metaKey) && event.code === KeyCode.KEY_S) {
        onSave();
      } else {
        return;
      }
      event.preventDefault();
    },
    [onAdd, onSave],
  );

  useGlobalKeyboard({ onKeyDown });
}
