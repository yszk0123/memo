import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../../firebase';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { createNote, Note } from '../../types/NoteType';
import { noteAdd, noteGetAll, noteRemove, noteUpdate } from '../actions';
import { selectors } from '../selectors';
import { getAllFromSnapshot } from '../utils/getAllFromSnapshot';
import { unwrapDocumentData } from '../utils/unwrapDocumentData';

export function useNoteAdd() {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(
    async (text: string) => {
      if (user === null) {
        return;
      }

      dispatch(noteAdd.request(text));

      const db = firebase.firestore();
      const noteRef = db.collection('notes').doc();
      const note = await createNote(noteRef, user.id, text);
      noteRef.set(note);

      dispatch(noteAdd.success(note));
    },
    [user, dispatch],
  );
}

export function useNoteUpdate() {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(
    async (noteId: string, text: string) => {
      if (user === null) {
        return;
      }

      dispatch(noteUpdate.request(noteId, text));

      const db = firebase.firestore();
      const noteRef = db.collection('notes').doc(noteId);
      noteRef.update('text', text);
      const newNoteRef = await noteRef.get();
      const newNote = await newNoteRef.data();

      if (newNote !== undefined) {
        dispatch(noteUpdate.success(unwrapDocumentData(newNote)));
      } else {
        dispatch(noteUpdate.failure());
      }
    },
    [user, dispatch],
  );
}

export function useNoteRemove() {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(
    async (noteId: string) => {
      if (user === null) {
        return;
      }

      dispatch(noteRemove.request(noteId));

      const db = firebase.firestore();
      const noteRef = db.collection('notes').doc(noteId);
      await noteRef.delete();

      dispatch(noteRemove.success(noteId));
    },
    [user, dispatch],
  );
}

export function useNoteGetAll() {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(async () => {
    if (user === null) {
      return;
    }

    dispatch(noteGetAll.request());

    const db = firebase.firestore();
    const notesRef = db
      .collection('notes')
      .where('authorId', '==', user.id)
      .orderBy('createdAt', 'desc');
    const snapshot: firebase.firestore.QuerySnapshot = await notesRef.get();
    const notes = getAllFromSnapshot<Note>(snapshot);

    dispatch(noteGetAll.success(notes));
  }, [user, dispatch]);
}
