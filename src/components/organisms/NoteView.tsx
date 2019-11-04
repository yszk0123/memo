import Link from 'next/link';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Note } from '../../types/NoteType';
import { LineBreakableText } from '../atoms/LineBreakableText';
import { TouchableListItem } from '../atoms/ListItem';
import { pad2 } from './pad2';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  note: Note;

  // FIXME: Implement with Menu component
  onRemove: (noteId: string) => void;
}

export const NoteView: React.FunctionComponent<Props> = ({ className, style, note }) => {
  const createdAt = useMemo(() => formatTime(note.createdAt), [note]);

  return (
    <Link as={`/notes/${note.id}`} href="/notes/[id]">
      <Container className={className} style={style}>
        <Content>
          <Text>
            <LineBreakableText text={note.text} />
          </Text>
          <CreatedAt>{createdAt}</CreatedAt>
        </Content>
      </Container>
    </Link>
  );
};

const Container = styled(TouchableListItem)`
  display: flex;
  align-items: center;
  padding: var(--space);
  justify-content: space-between;
  cursor: pointer;
`;

const Content = styled(TouchableListItem)`
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
  align-self: flex-end;
  font-size: var(--font-sm);
  color: var(--color-button-secondary-text--reverse);
  margin: 0;
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
