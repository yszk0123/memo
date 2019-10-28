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

enum DialogType {
  NONE,
  ADD,
  UPDATE,
}

export const HomePage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const [dialogType, setDialogType] = useState(DialogType.NONE);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const user = useTypedSelector(selectors.user);
  const notes = useTypedSelector(selectors.notes);

  const handleLogin = useCallback(() => {
    dispatch(actions.USER_LOGIN_REQUEST());
  }, [dispatch]);

  const handleNoteAdd = useCallback(
    (text: string) => {
      dispatch(actions.NOTE_ADD_REQUEST(text));
      setDialogType(DialogType.NONE);
    },
    [dispatch],
  );

  const handleNoteUpdate = useCallback(
    (text: string) => {
      if (currentNote) {
        dispatch(actions.NOTE_UPDATE_REQUEST(currentNote.id, text));
        setDialogType(DialogType.NONE);
      }
    },
    [dispatch, currentNote],
  );

  const handleOpenAdd = useCallback(() => {
    setDialogType(DialogType.ADD);
  }, []);

  const handleOpenUpdate = useCallback((note: Note) => {
    setDialogType(DialogType.UPDATE);
    setCurrentNote(note);
  }, []);

  const handleCancel = useCallback(() => {
    setDialogType(DialogType.NONE);
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
      <AppLayout user={null}>
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      </AppLayout>
    );
  }

  return (
    <AppLayout user={user}>
      <NoteList notes={notes} onClick={handleOpenUpdate} onRemove={handleNoteRemove} />
      {dialogType === DialogType.ADD && (
        <NoteAddDialog initialText="" onSubmit={handleNoteAdd} onCancel={handleCancel} />
      )}
      {dialogType === DialogType.UPDATE && currentNote !== null && (
        <NoteAddDialog
          initialText={currentNote.text}
          onSubmit={handleNoteUpdate}
          onCancel={handleCancel}
        />
      )}
      <PrimaryButton onClick={handleOpenAdd}>Add</PrimaryButton>
    </AppLayout>
  );
};

const NoteAddDialog: React.FunctionComponent<{
  initialText: string;
  onSubmit: (text: string) => void;
  onCancel: () => void;
}> = ({ initialText, onSubmit, onCancel }) => {
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

const NoteList: React.FunctionComponent<{
  notes: Note[];
  onClick: (note: Note) => void;
  onRemove: (noteId: string) => void;
}> = ({ notes, onClick, onRemove }) => {
  return (
    <List className="NoteList">
      {notes.map(note => {
        return <NoteView key={note.id} note={note} onClick={onClick} onRemove={onRemove} />;
      })}
    </List>
  );
};

const NoteView: React.FunctionComponent<{
  note: Note;
  onClick: (note: Note) => void;
  onRemove: (noteId: string) => void;
}> = ({ note, onClick, onRemove }) => {
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
    <ListItem className="NoteView" onClick={handleClick}>
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
