import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PrimaryFab } from '../src/components/atoms/Fab';
import { NoteList } from '../src/components/organisms/NoteList';
import { AppLayout } from '../src/components/templates/AppLayout';
import { useGlobalKeyboardShortcut } from '../src/hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../src/hooks/useTypedSelector';
import { useNoteGetAll, useNoteRemove } from '../src/redux/hooks/noteHooks';
import { selectors } from '../src/redux/selectors';
import { noop } from '../src/utils/noop';

interface Props {}

const Index: NextPage<Props> = () => {
  const notes = useTypedSelector(selectors.notes);
  const isLoading = useTypedSelector(selectors.isLoading);
  const noteRemove = useNoteRemove();
  const noteGetAll = useNoteGetAll();

  useEffect(() => {
    noteGetAll();
  }, [noteGetAll]);

  useGlobalKeyboardShortcut({
    onAdd: noop,
    onSave: noop,
  });

  return (
    <AppLayout>
      <NoteList notes={notes} onFetchMore={noteGetAll} onRemove={noteRemove} />
      <Loading className={isLoading ? 'visible' : undefined}>Loading</Loading>
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

const Loading = styled.div`
  padding: calc(var(--space) * 2);
  text-align: center;
  background-color: var(--color-loading);
  position: fixed;
  width: 100%;
  bottom: 0;
  transition: opacity var(--transition);
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: var(--opacity--hover);
  }
`;

export default Index;
