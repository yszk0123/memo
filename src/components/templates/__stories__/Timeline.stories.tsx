import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Note } from '../../../types/NoteType';
import { TouchableListItem } from '../../atoms/ListItem';
import { Paper } from '../../atoms/Paper';
import { GroupVirtualList } from '../../molecules/GroupVirtualList';

export default {
  title: 'templates/Timeline',
};

export const TimelineStory: React.FunctionComponent = () => {
  return (
    <Container>
      <Sheet>
        <StyledTimeline notes={notes} onFetchMore={noop} />
      </Sheet>
      <Sheet>
        <StyledTimeline notes={notes} onFetchMore={noop} />
      </Sheet>
      <Sheet>
        <StyledTimeline notes={notes} onFetchMore={noop} />
      </Sheet>
    </Container>
  );
};

const noop = (): void => {};

const notes: Note[] = Array(50)
  .fill(null)
  .map((_, i) => ({
    id: `note-${i}`,
    text: `text-${i}`,
    authorId: '',
    createdAt: 0,
    coordinate: null,
  }));

const ITEM_SIZE = 32;
const STICKY_ITEM_SIZE = 28;

interface Props {
  className?: string;
  notes: Note[];
  onFetchMore: (noteId: string) => void;
}

const Timeline: React.FunctionComponent<Props> = ({ className, notes, onFetchMore }) => {
  const [fetchingNoteId, setFetchingNoteId] = useState();

  const getKey = useCallback((note: Note, i: number) => String(Math.floor(i / 3)), []);

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
        return <Item key={note.id}>{note.text}</Item>;
      }}
      renderStickyItem={(note, key) => {
        return <StickyItem key={note.id}>{key}</StickyItem>;
      }}
      stickyItemSize={STICKY_ITEM_SIZE}
      onFetchMore={handleFetchMore}
    />
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: var(--space);
  display: flex;
`;

const Sheet = styled(Paper)`
  width: 100%;
  height: 100%;
  & + & {
    margin-left: var(--space);
  }
`;

const StyledTimeline = styled(Timeline)`
  width: 100%;
  height: 100%;
`;

const Item = styled(TouchableListItem)`
  width: 100%;
  height: ${ITEM_SIZE}px;
  display: flex;
  align-items: center;
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
