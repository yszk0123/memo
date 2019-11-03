import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { AppLayout } from '../../src/components/templates/AppLayout';
import { NoteAdd } from '../../src/components/templates/NoteAdd';
import { useTypedSelector } from '../../src/hooks/useTypedSelector';
import { useNoteGet, useNoteRemove, useNoteUpdate } from '../../src/redux/hooks/noteHooks';
import { selectors } from '../../src/redux/selectors';

interface Props {}

const NotesShow: NextPage<Props> = () => {
  const router = useRouter();
  const noteId = Array.isArray(router.query.id) ? null : router.query.id;
  const note = useTypedSelector(state => selectors.note(state, noteId));
  const noteUpdate = useNoteUpdate();
  const noteRemove = useNoteRemove();
  const noteGet = useNoteGet();

  const handleNoteUpdate = useCallback(
    (text: string) => {
      if (note) {
        noteUpdate(note.id, text);
      }
    },
    [noteUpdate, note],
  );

  const handleNoteRemove = useCallback(() => {
    if (noteId !== null) {
      noteRemove(noteId);
      router.push('/');
    }
  }, [noteId, noteRemove, router]);

  useEffect(() => {
    if (note === null && noteId !== null) {
      noteGet(noteId);
    }
  }, [note, noteId, noteGet]);

  if (note === null) {
    return (
      <AppLayout>
        <p>Not Found</p>
      </AppLayout>
    );
  }

  return (
    <NoteAdd
      initialText={note.text}
      note={note}
      onRemove={handleNoteRemove}
      onSubmit={handleNoteUpdate}
    />
  );
};

export default NotesShow;
