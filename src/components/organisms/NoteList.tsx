import React from 'react';
import styled from 'styled-components';
import { Note } from '../../types/NoteType';
import { VirtualList } from '../molecules/VirtualList';
import { NoteView } from './NoteView';

const ITEM_SIZE = 80;

interface Props {
  className?: string;
  notes: Note[];
  onClick: (note: Note) => void;
  onRemove: (noteId: string) => void;
}

export const NoteList: React.FunctionComponent<Props> = ({
  className,
  notes,
  onClick,
  onRemove,
}) => {
  return (
    <VirtualList
      className={className}
      items={notes}
      itemSize={ITEM_SIZE}
      renderItem={note => {
        return <Item key={note.id} note={note} onClick={onClick} onRemove={onRemove} />;
      }}
      onFetchMore={() => {
        console.log('BOTTOM');
      }}
    />
  );
};

const Item = styled(NoteView)`
  height: ${ITEM_SIZE}px;
`;
