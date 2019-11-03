import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PrimaryFab } from '../src/components/atoms/Fab';
import { AppLayout } from '../src/components/organisms/AppLayout';
import { NoteAddDialog } from '../src/components/organisms/NoteAddDialog';
import { NoteList } from '../src/components/organisms/NoteList';
import { useGlobalKeyboardShortcut } from '../src/hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../src/hooks/useTypedSelector';
import {
  useNoteAdd,
  useNoteGetAll,
  useNoteRemove,
  useNoteUpdate,
} from '../src/redux/hooks/noteHooks';
import { useUserStatusSubscribe } from '../src/redux/hooks/userHooks';
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

  const notes = useTypedSelector(selectors.notes);
  const isLoading = useTypedSelector(selectors.isLoading);

  const noteAdd = useNoteAdd();
  const noteUpdate = useNoteUpdate();
  const noteRemove = useNoteRemove();

  const handleNoteAdd = useCallback(
    (text: string) => {
      noteAdd(text);
      setDialogType(DialogType.NONE);
    },
    [noteAdd],
  );

  const handleNoteUpdate = useCallback(
    (text: string) => {
      if (currentNote) {
        noteUpdate(currentNote.id, text);
        setDialogType(DialogType.NONE);
      }
    },
    [noteUpdate, currentNote],
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

  const handleNoteRemove = noteRemove;

  const noteGetAll = useNoteGetAll();

  useEffect(() => {
    noteGetAll();
  }, [noteGetAll]);

  useUserStatusSubscribe();

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  if (isLoading) {
    return (
      <AppLayout>
        <p>Loading...</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
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
      <AddFab onClick={handleOpenAdd}>Add</AddFab>
    </AppLayout>
  );
};

const AddFab = styled(PrimaryFab)`
  position: fixed;
  right: calc(var(--space) * 2);
  bottom: calc(var(--space) * 2);
`;

export default Index;
