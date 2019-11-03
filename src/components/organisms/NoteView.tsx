import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Note } from '../../types/NoteType';
import { SecondaryButton } from '../atoms/Button';
import { ListItem } from '../atoms/ListItem';

interface Props {
  className?: string;
  note: Note;
  onClick: (note: Note) => void;
  onRemove: (noteId: string) => void;
}

export const NoteView: React.FunctionComponent<Props> = ({
  className,
  note,
  onClick,
  onRemove,
}) => {
  const createdAt = useMemo(() => formatTime(note.createdAt), [note]);

  const handleClick = useCallback(() => {
    onClick(note);
  }, [note, onClick]);

  const handleRemove = useCallback(
    (event: React.MouseEvent) => {
      onRemove(note.id);
      event.preventDefault();
      event.stopPropagation();
    },
    [note, onRemove],
  );

  return (
    <Container className={className} onClick={handleClick}>
      <Content>
        <Text>{note.text}</Text>
        <CreatedAt>{createdAt}</CreatedAt>
      </Content>
      <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
    </Container>
  );
};

const Container = styled(ListItem)`
  display: flex;
  align-items: center;
  padding: var(--space);
  justify-content: space-between;
`;

const Content = styled(ListItem)`
  padding-right: var(--space);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
`;

const Text = styled.p`
  flex-grow: 1;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const CreatedAt = styled.p`
  font-size: var(--font-sm);
  min-width: 120px;
  color: var(--color-button-secondary-text--reverse);
  margin: 0;
`;

const RemoveButton = styled(SecondaryButton)`
  margin-left: var(--space);
  align-self: center;
`;

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  return `${year}-${pad2(month)}-${pad2(d)} ${pad2(h)}:${pad2(m)}`;
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
