import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actions } from '../../redux/actions';
import { selectors } from '../../redux/selectors';
import { Note } from '../../types/NoteType';
import { noop } from '../../utils/noop';
import { DefaultButton, PrimaryButton, SecondaryButton } from '../atoms/Button';
import { List } from '../atoms/List';
import { ListItem } from '../atoms/ListItem';
import { TextArea } from '../atoms/TextArea';
import { Dialog, DialogActions, DialogContent } from '../molecules/Dialog';
import { AppLayout } from '../organisms/AppLayout';

interface Props {}

export const HomePage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const user = useTypedSelector(selectors.user);
  const notes = useTypedSelector(selectors.notes);

  const handleLogin = useCallback(() => {
    dispatch(actions.USER_LOGIN_REQUEST());
  }, [dispatch]);

  const handleNoteAdd = useCallback(
    (text: string) => {
      dispatch(actions.NOTE_ADD_REQUEST(text));
      setIsOpen(false);
    },
    [dispatch],
  );

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNoteRemove = useCallback(
    (noteId: string) => {
      dispatch(actions.NOTE_REMOVE_REQUEST(noteId));
    },
    [dispatch],
  );

  useGlobalKeyboardShortcut({
    dispatch,
    onAdd: noop,
    onSave: noop,
  });

  if (user === null) {
    return (
      <AppLayout>
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <p>{user.displayName ? `Hello, ${user.id}!` : 'Hello'}</p>
      <NoteList notes={notes} onRemove={handleNoteRemove} />
      {isOpen && <NoteAddDialog onSubmit={handleNoteAdd} onCancel={handleCancel} />}
      <PrimaryButton onClick={handleOpen}>Add</PrimaryButton>
    </AppLayout>
  );
};

const NoteAddDialog: React.FunctionComponent<{
  onSubmit: (text: string) => void;
  onCancel: () => void;
}> = ({ onSubmit, onCancel }) => {
  const [text, setText] = useState('');

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
    <Dialog className="NoteAddDialog">
      <DialogContent className="NoteAddDialog__content">
        <TextArea className="NoteAddDialog__text" value={text} onChange={handleChange} />
      </DialogContent>
      <DialogActions className="NoteAddDialog__actions">
        <DefaultButton className="NoteAddDialog__button" onClick={onCancel}>
          Cancel
        </DefaultButton>
        <PrimaryButton className="NoteAddDialog__button" disabled={disabled} onClick={handleSubmit}>
          Add
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

const NoteList: React.FunctionComponent<{ notes: Note[]; onRemove: (noteId: string) => void }> = ({
  notes,
  onRemove,
}) => {
  return (
    <List className="NoteList">
      {notes.map(note => {
        return <NoteView key={note.id} note={note} onRemove={onRemove} />;
      })}
    </List>
  );
};

const NoteView: React.FunctionComponent<{ note: Note; onRemove: (noteId: string) => void }> = ({
  note,
  onRemove,
}) => {
  const createdAt = useMemo(() => formatTime(note.createdAt), [note]);

  const handleRemove = useCallback(() => {
    onRemove(note.id);
  }, [note, onRemove]);

  return (
    <ListItem className="NoteView">
      <pre className="NoteView-text">{note.text}</pre>
      <p className="NoteView-created-at">{createdAt}</p>
      <SecondaryButton className="NoteView-remove" onClick={handleRemove}>
        Remove
      </SecondaryButton>
    </ListItem>
  );
};

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
