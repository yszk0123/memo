import React from 'react';
import styled from 'styled-components';
import { Note } from '../../types/NoteType';
import { noop } from '../../utils/noop';
import { VirtualList } from '../molecules/VirtualList';
import { NoteView } from './NoteView';

const ITEM_SIZE = 80;

interface Props {
  className?: string;
  notes: Note[];
  onRemove: (noteId: string) => void;
}

export const NoteList: React.FunctionComponent<Props> = ({ className, notes, onRemove }) => {
  return (
    <VirtualList
      className={className}
      items={notes}
      itemSize={ITEM_SIZE}
      renderItem={note => {
        return <Item key={note.id} note={note} onRemove={onRemove} />;
      }}
      onFetchMore={noop}
    />
  );
};

const Item = styled(NoteView)`
  height: ${ITEM_SIZE}px;
`;
