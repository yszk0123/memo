import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../src/components/atoms/Button';
import { AppLayout } from '../src/components/organisms/AppLayout';
import { NoteAddDialog } from '../src/components/organisms/NoteAddDialog';
import { NoteList } from '../src/components/organisms/NoteList';
import { useGlobalKeyboardShortcut } from '../src/hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../src/hooks/useTypedSelector';
import { actions } from '../src/redux/actions';
import { selectors } from '../src/redux/selectors';
import { Note } from '../src/types/NoteType';
import { noop } from '../src/utils/noop';

interface Props {}

enum DialogType {
  NONE,
  ADD,
  UPDATE,
}

const Index: NextPage<Props> = () => {
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

export default Index;
