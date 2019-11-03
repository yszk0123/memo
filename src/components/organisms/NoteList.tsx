import React from 'react';
import styled from 'styled-components';
import { Note } from '../../types/NoteType';
import { List } from '../atoms/List';
import { NoteView } from './NoteView';

interface Props {
  notes: Note[];
  onClick: (note: Note) => void;
  onRemove: (noteId: string) => void;
}

export const NoteList: React.FunctionComponent<Props> = ({ notes, onClick, onRemove }) => {
  return (
    <Container>
      {notes.map(note => {
        return <NoteView key={note.id} note={note} onClick={onClick} onRemove={onRemove} />;
      })}
    </Container>
  );
};

const Container = styled(List)``;
