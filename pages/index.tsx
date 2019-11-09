import { NextPage } from 'next';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../src/components/atoms/Button';
import { PrimaryFab } from '../src/components/atoms/Fab';
import { List } from '../src/components/atoms/List';
import { ListItem } from '../src/components/atoms/ListItem';
import { SecondaryText } from '../src/components/atoms/Text';
import { TextInput } from '../src/components/atoms/TextInput';
import { Menu, MenuPlacement, useMenuState } from '../src/components/molecules/Menu';
import { NoteList } from '../src/components/organisms/NoteList';
import { pad2 } from '../src/components/organisms/pad2';
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
  const [dateBefore, setDateBefore] = useState<number | null>(null);
  const noteRemove = useNoteRemove();
  const noteGetAll = useNoteGetAll(dateBefore);
  const menuState = useMenuState();

  const handleUpdateDateBefore = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const time = getTime(event.currentTarget.value);
    setDateBefore(time);
  }, []);

  useEffect(() => {
    noteGetAll();
  }, [noteGetAll]);

  useGlobalKeyboardShortcut({
    onAdd: noop,
    onSave: noop,
  });

  const dateBeforeString = useMemo(() => format(dateBefore), [dateBefore]);

  const center = (
    <>
      <DefaultButton onClick={menuState.onOpen}>Filter</DefaultButton>
      <Menu placement={MenuPlacement.BOTTOM} state={menuState}>
        <List>
          <ListItem>
            <SecondaryText>Before</SecondaryText>
          </ListItem>
          <ListItem>
            <TextInput
              type="date"
              value={dateBeforeString ?? ''}
              onChange={noop}
              onInput={handleUpdateDateBefore}
            ></TextInput>
          </ListItem>
        </List>
      </Menu>
    </>
  );

  return (
    <AppLayout center={center}>
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

function getTime(dateString: string): number | null {
  try {
    return new Date(dateString).getTime();
  } catch {
    return null;
  }
}

function format(date: number | null): string | null {
  if (date === null) {
    return null;
  }

  try {
    const d = new Date(date);
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  } catch {
    return null;
  }
}

export default Index;
