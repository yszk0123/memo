import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Note } from '../../types/NoteType';
import { SecondaryButton } from '../atoms/Button';
import { PrimaryFab, SecondaryFab } from '../atoms/Fab';
import { GoogleMaps } from '../atoms/GoogleMaps';
import { TextArea } from '../atoms/TextArea';
import { AppLayout } from './AppLayout';

const MIN_HEIGHT = 300;

interface Props {
  initialText: string;
  note?: Note | null;
  onSubmit: (text: string) => void;
  onRemove: () => void;
}

export const NoteAdd: React.FunctionComponent<Props> = ({
  initialText,
  note,
  onSubmit,
  onRemove,
}) => {
  const [text, setText] = useState(initialText);
  const [isMap, setIsMap] = useState(false);

  const handleChange = useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(text);
  }, [text, onSubmit]);

  const handleToggleMap = useCallback(() => {
    setIsMap(v => !v);
  }, []);

  const disabled = text === '';

  return (
    <AppLayout>
      <Content>
        <ContentText autoFocus value={text} onChange={handleChange} />
        <RemoveButton onClick={onRemove}>Remove</RemoveButton>
        {note != null && note.coordinate != null && isMap && (
          <Map>
            <GoogleMaps coordinate={note.coordinate} />
          </Map>
        )}
      </Content>
      <UpdateFab disabled={disabled} onClick={handleSubmit}>
        Update
      </UpdateFab>
      <MapFab className={isMap ? undefined : 'hidden'} onClick={handleToggleMap}>
        Map
      </MapFab>
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

const Map = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

const ContentText = styled(TextArea)`
  /* Move to parent */
  font-size: var(--font-md);
  flex-grow: 1;
  min-height: ${MIN_HEIGHT}px;
  border: none;
`;

const UpdateFab = styled(PrimaryFab)`
  position: fixed;
  right: calc(var(--space) * 2);
  bottom: calc(var(--space) * 2);
`;

const MapFab = styled(SecondaryFab)`
  position: fixed;
  left: calc(var(--space) * 2);
  bottom: calc(var(--space) * 2);

  &.hidden {
    opacity: var(--opacity--hover);
  }
`;

const RemoveButton = styled(SecondaryButton)`
  width: 100%;
`;
