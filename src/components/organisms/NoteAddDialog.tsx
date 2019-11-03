import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { noop } from '../../utils/noop';
import { DefaultButton, PrimaryButton } from '../atoms/Button';
import { PrefixedLink } from '../atoms/PrefixedLink';
import { TextArea } from '../atoms/TextArea';
import { Dialog, DialogActions, DialogContent } from '../molecules/Dialog';

interface Props {
  initialText: string;
  onSubmit: (text: string) => void;
  onCancel: () => void;
}

export const NoteAddDialog: React.FunctionComponent<Props> = ({
  initialText,
  onSubmit,
  onCancel,
}) => {
  const [text, setText] = useState(initialText);

  const handleChange = useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(text);
    setText('');
  }, [text, onSubmit]);

  const disabled = text === '';

  return (
    <Container>
      <Content>
        <ContentText value={text} onChange={handleChange} />
      </Content>
      <Actions>
        <PrefixedLink href="/">
          <CancelButton onClick={noop}>Cancel</CancelButton>
        </PrefixedLink>
        <CancelButton onClick={onCancel}>Cancel (OLD)</CancelButton>
        <AddButton disabled={disabled} onClick={handleSubmit}>
          Add
        </AddButton>
      </Actions>
    </Container>
  );
};

const Container = styled(Dialog)`
  background-color: var(--color-default);
  padding: calc(var(--space) * 2);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentText = styled(TextArea)`
  /* Move to Dialog component */
  font-size: var(--font-md);

  min-height: 6rem;
  flex-grow: 1;
`;

const Actions = styled(DialogActions)`
  margin-top: var(--space);
`;

const CancelButton = styled(DefaultButton)``;

const AddButton = styled(PrimaryButton)`
  margin-left: var(--space);
`;
