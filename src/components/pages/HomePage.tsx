import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actions } from '../../redux/actions';
import { selectors } from '../../redux/selectors';
import { Note } from '../../types/NoteType';
import { noop } from '../../utils/noop';
import { PrimaryButton } from '../atoms/Button';
import { AppLayout } from '../organisms/AppLayout';
import { NoteAddDialog } from '../organisms/NoteAddDialog';
import { NoteList } from '../organisms/NoteList';

interface Props {}

enum DialogType {
  NONE,
  ADD,
  UPDATE,
}

export const HomePage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const [dialogType, setDialogType] = useState(DialogType.NONE);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const user = useTypedSelector(selectors.user);
  const notes = useTypedSelector(selectors.notes);

  const handleLogin = useCallback(() => {
    dispatch(actions.USER_LOGIN_REQUEST());
  }, [dispatch]);

  const handleNoteAdd = useCallback(
    (text: string) => {
      dispatch(actions.NOTE_ADD_REQUEST(text));
      setDialogType(DialogType.NONE);
    },
    [dispatch],
  );

  const handleNoteUpdate = useCallback(
    (text: string) => {
      if (currentNote) {
        dispatch(actions.NOTE_UPDATE_REQUEST(currentNote.id, text));
        setDialogType(DialogType.NONE);
      }
    },
    [dispatch, currentNote],
  );

  const handleOpenAdd = useCallback(() => {
    setDialogType(DialogType.ADD);
  }, []);

  const handleOpenUpdate = useCallback((note: Note) => {
    setDialogType(DialogType.UPDATE);
    setCurrentNote(note);
  }, []);

  const handleCancel = useCallback(() => {
    setDialogType(DialogType.NONE);
  }, []);

  const handleNoteRemove = useCallback(
    (noteId: string) => {
      dispatch(actions.NOTE_REMOVE_REQUEST(noteId));
    },
    [dispatch],
  );

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  if (user === null) {
    return (
      <AppLayout user={null}>
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      </AppLayout>
    );
  }

  return (
    <AppLayout user={user}>
      <NoteList notes={notes} onClick={handleOpenUpdate} onRemove={handleNoteRemove} />
      {dialogType === DialogType.ADD && (
        <NoteAddDialog initialText="" onSubmit={handleNoteAdd} onCancel={handleCancel} />
      )}
      {dialogType === DialogType.UPDATE && currentNote !== null && (
        <NoteAddDialog
          initialText={currentNote.text}
          onSubmit={handleNoteUpdate}
          onCancel={handleCancel}
        />
      )}
      <PrimaryButton onClick={handleOpenAdd}>Add</PrimaryButton>
    </AppLayout>
  );
};
