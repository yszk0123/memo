import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PrimaryFab } from '../src/components/atoms/Fab';
import { AppLayout } from '../src/components/organisms/AppLayout';
import { NoteList } from '../src/components/organisms/NoteList';
import { useGlobalKeyboardShortcut } from '../src/hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../src/hooks/useTypedSelector';
import { useNoteGetAll, useNoteRemove } from '../src/redux/hooks/noteHooks';
import { selectors } from '../src/redux/selectors';
import { noop } from '../src/utils/noop';

interface Props {}

const Index: NextPage<Props> = () => {
  const dispatch = useDispatch();

  const notes = useTypedSelector(selectors.notes);

  const noteRemove = useNoteRemove();

  const noteGetAll = useNoteGetAll();

  useEffect(() => {
    noteGetAll();
  }, [noteGetAll]);

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  return (
    <AppLayout>
      <NoteList notes={notes} onRemove={noteRemove} onFetchMore={noteGetAll} />
      <Link href="/notes">
        <AddFab>Add</AddFab>
      </Link>
    </AppLayout>
  );
};

const AddFab = styled(PrimaryFab)`
  position: fixed;
  right: calc(var(--space) * 2);
  bottom: calc(var(--space) * 2);
`;

export default Index;
