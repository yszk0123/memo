import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalKeyboardShortcut } from '../../hooks/useGlobalKeyboardShortcut';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actions } from '../../redux/actions';
import { selectors } from '../../redux/selectors';
import { Note } from '../../types/NoteType';
import { noop } from '../../utils/noop';
import { Button } from '../atoms/Button';
import { AppLayout } from '../organisms/AppLayout';

interface Props {}

export const HomePage: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const user = useTypedSelector(selectors.user);
  const notes = useTypedSelector(selectors.notes);

  const handleLogin = useCallback(() => {
    dispatch(actions.USER_LOGIN_REQUEST());
  }, [dispatch]);

  const handleNoteAdd = useCallback(
    (text: string) => {
      dispatch(actions.NOTE_ADD_REQUEST(text));
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
        <Button onClick={handleLogin}>Login</Button>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <p>{user.displayName ? `Hello, ${user.id}!` : 'Hello'}</p>
      <NoteList notes={notes} />
      <NoteAdd onSubmit={handleNoteAdd} />
    </AppLayout>
  );
};

const NoteAdd: React.FunctionComponent<{ onSubmit: (text: string) => void }> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(text);
    setText('');
  }, [text, onSubmit]);

  const disabled = text === '';

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <Button disabled={disabled} onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
};

const NoteList: React.FunctionComponent<{ notes: Note[] }> = ({ notes }) => {
  return (
    <div className="NoteList">
      {notes.map(note => {
        return (
          <div key={note.id} className="NoteList__note">
            {note.text}
          </div>
        );
      })}
    </div>
  );
};
