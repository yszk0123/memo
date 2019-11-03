import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { PrimaryFab } from '../atoms/Fab';
import { TextArea } from '../atoms/TextArea';
import { AppLayout } from '../organisms/AppLayout';

interface Props {
  initialText: string;
  onSubmit: (text: string) => void;
}

export const NoteAdd: React.FunctionComponent<Props> = ({ initialText, onSubmit }) => {
  const [text, setText] = useState(initialText);

  const handleChange = useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(text);
  }, [text, onSubmit]);

  const disabled = text === '';

  return (
    <AppLayout>
      <Content>
        <ContentText autoFocus value={text} onChange={handleChange} />
      </Content>
      <UpdateFab disabled={disabled} onClick={handleSubmit}>
        Update
      </UpdateFab>
    </AppLayout>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ContentText = styled(TextArea)`
  /* Move to parent */
  font-size: var(--font-md);
  flex-grow: 1;
  border: none;
`;

const UpdateFab = styled(PrimaryFab)`
  position: fixed;
  right: calc(var(--space) * 2);
  bottom: calc(var(--space) * 2);
`;
