import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Note } from '../../types/NoteType';
import { noop } from '../../utils/noop';
import { GroupVirtualList } from '../molecules/GroupVirtualList';
import { NoteView } from './NoteView';
import { pad2 } from './pad2';

const ITEM_SIZE = 80;
const STICKY_ITEM_SIZE = 28;

interface Props {
  className?: string;
  notes: Note[];
  onRemove: (noteId: string) => void;
}

export const NoteList: React.FunctionComponent<Props> = ({ className, notes, onRemove }) => {
  const getKey = useCallback((note: Note) => getTime(note.createdAt), []);

  return (
    <GroupVirtualList
      className={className}
      items={notes}
      itemSize={ITEM_SIZE}
      stickyItemSize={STICKY_ITEM_SIZE}
      getKey={getKey}
      renderItem={note => {
        return <Item key={note.id} note={note} onRemove={onRemove} />;
      }}
      renderStickyItem={(note, key) => {
        return <StickyItem key={note.id}>{key}</StickyItem>;
      }}
      onFetchMore={noop}
    />
  );
};

const Item = styled(NoteView)`
  height: ${ITEM_SIZE}px;
`;

const StickyItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-dim);
  color: var(--color-secondary-text);
  font-size: var(--font-sm);
  height: ${STICKY_ITEM_SIZE}px;
  padding-left: var(--space);
`;

function getTime(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth();
  const d = date.getDate();
  return `${year}-${pad2(month + 1)}-${pad2(d)}`;
}
