import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { firebase } from '../../firebase';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { createNote, Note } from '../../types/NoteType';
import {
  noteAdd,
  noteGet,
  noteGetAll,
  noteRemove,
  noteReset,
  noteSubscribeAll,
  noteUpdate,
} from '../actions';
import { selectors } from '../selectors';
import { getAllFromSnapshot } from '../utils/getAllFromSnapshot';
import { getFromSnapshot } from '../utils/getFromSnapshot';
import { unwrapDocumentData } from '../utils/unwrapDocumentData';

const LIMIT = 20;

export function useNoteAdd(): (text: string) => void {
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

export function useNoteUpdate(): (noteId: string, text: string) => void {
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

export function useNoteRemove(): (noteId: string) => void {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(
    async (noteId: string) => {
      if (user === null) {
        return;
      }
      if (!confirm('This operation cannot be undone')) {
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

export function useNoteGet(): (noteId: string) => void {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  return useCallback(
    async (noteId: string) => {
      if (user === null) {
        return;
      }

      dispatch(noteGet.request());

      const db = firebase.firestore();
      try {
        const noteRef = await db.doc(`notes/${noteId}`).get();
        const note = getFromSnapshot<Note>(noteRef);

        if (note !== null) {
          dispatch(noteGet.success(note));
        } else {
          dispatch(noteGet.failure());
        }
      } catch (error) {
        dispatch(noteGet.failure());
      }
    },
    [user, dispatch],
  );
}

type Cursor = firebase.firestore.QueryDocumentSnapshot;

export function useNoteGetAll(dateBefore?: number | null): () => Promise<void> {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);
  const cursorRef = useRef<Cursor | null>(null);

  useEffect(() => {
    cursorRef.current = null;
    dispatch(noteReset());
  }, [dateBefore, dispatch]);

  return useCallback(async () => {
    if (user === null) {
      return;
    }

    dispatch(noteGetAll.request());

    const db = firebase.firestore();
    let notesRef = db
      .collection('notes')
      .where('authorId', '==', user.id)
      .orderBy('createdAt', 'desc')
      .limit(LIMIT);
    if (cursorRef.current !== null) {
      notesRef = notesRef.startAfter(cursorRef.current);
    }
    if (dateBefore != null) {
      notesRef = notesRef.where('createdAt', '<=', dateBefore);
    }
    // Store original reference before calling async functions
    const ref = cursorRef;
    const snapshot: firebase.firestore.QuerySnapshot = await notesRef.get();
    const notes = getAllFromSnapshot<Note>(snapshot);
    ref.current = snapshot.docs[snapshot.docs.length - 1] ?? null;

    dispatch(noteGetAll.success(notes));
  }, [user, dispatch, dateBefore]);
}

/**
 * Pagination is not implemented...
 */
export function useNoteSubscribeAll(): void {
  const dispatch = useDispatch();
  const user = useTypedSelector(selectors.user);

  useEffect(() => {
    if (user === null) {
      return;
    }

    dispatch(noteSubscribeAll.request());

    const db = firebase.firestore();
    const unsubscribe = db
      .collection('notes')
      .where('authorId', '==', user.id)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const notes = getAllFromSnapshot<Note>(snapshot);

        dispatch(noteSubscribeAll.success(notes));
      });

    return unsubscribe;
  }, [user, dispatch]);
}
