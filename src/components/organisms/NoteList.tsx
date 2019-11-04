import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Note } from '../../types/NoteType';
import { GroupVirtualList } from '../molecules/GroupVirtualList';
import { NoteView } from './NoteView';
import { pad2 } from './pad2';

const ITEM_SIZE = 80;
const STICKY_ITEM_SIZE = 28;

interface Props {
  className?: string;
  notes: Note[];
  onRemove: (noteId: string) => void;
  onFetchMore: (noteId: string) => void;
}

export const NoteList: React.FunctionComponent<Props> = ({
  className,
  notes,
  onRemove,
  onFetchMore,
}) => {
  const [fetchingNoteId, setFetchingNoteId] = useState();

  const getKey = useCallback((note: Note) => getTime(note.createdAt), []);

  const handleFetchMore = useCallback(
    (noteId: string) => {
      if (notes.length >= 1 && fetchingNoteId !== noteId) {
        onFetchMore(notes[notes.length - 1].id);
        setFetchingNoteId(noteId);
      }
    },
    [notes, fetchingNoteId, onFetchMore],
  );

  return (
    <GroupVirtualList
      className={className}
      getKey={getKey}
      items={notes}
      itemSize={ITEM_SIZE}
      renderItem={note => {
        return <Item key={note.id} note={note} onRemove={onRemove} />;
      }}
      renderStickyItem={(note, key) => {
        return <StickyItem key={note.id}>{key}</StickyItem>;
      }}
      stickyItemSize={STICKY_ITEM_SIZE}
      onFetchMore={handleFetchMore}
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
