import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { NoteAdd } from '../../src/components/templates/NoteAdd';
import { useNoteAdd } from '../../src/redux/hooks/noteHooks';
import { noop } from '../../src/utils/noop';

interface Props {}

const NotesCreate: NextPage<Props> = () => {
  const noteAdd = useNoteAdd();
  const router = useRouter();

  const handleNoteAdd = useCallback(
    (text: string) => {
      noteAdd(text);
      router.push('/');
    },
    [noteAdd, router],
  );

  return <NoteAdd initialText="" onSubmit={handleNoteAdd} onRemove={noop} />;
};

export default NotesCreate;
