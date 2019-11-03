import { createReducer } from 'typesafe-actions';
import { State } from '../types/StateType';
import { noteAdd, noteGetAll, noteRemove, noteUpdate, userLogin, userLogout } from './actions';

export const reducer = createReducer<State>({
  user: null,
  notes: [],
  isLoading: true,
})
  .handleAction(userLogin.success, (state, { payload: { user } }) => {
    return { ...state, user };
  })
  .handleAction(userLogout.success, state => {
    return { ...state, user: null };
  })
  .handleAction(noteGetAll.request, state => {
    return { ...state, isLoading: true };
  })
  .handleAction(noteGetAll.success, (state, { payload: { notes } }) => {
    return { ...state, notes, isLoading: false };
  })
  .handleAction(noteGetAll.failure, state => {
    return { ...state, isLoading: false };
  })
  .handleAction(noteAdd.success, (state, { payload: { note } }) => {
    return { ...state, notes: [note, ...state.notes] };
  })
  .handleAction(noteUpdate.success, (state, { payload: { note } }) => {
    const notes = state.notes.map(old => (old.id === note.id ? note : old));
    return { ...state, notes };
  })
  .handleAction(noteRemove.success, (state, { payload: { noteId } }) => {
    const notes = state.notes.filter(note => note.id !== noteId);
    return { ...state, notes };
  });
