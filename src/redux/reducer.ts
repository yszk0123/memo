import { createReducer } from 'typesafe-actions';

import { State } from '../types/StateType';
import {
  noteAdd,
  noteGet,
  noteGetAll,
  noteRemove,
  noteReset,
  noteSubscribeAll,
  noteUpdate,
  userLogin,
  userLogout,
} from './actions';

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
  .handleAction(noteReset, state => {
    return { ...state, notes: [] };
  })
  .handleAction(noteGetAll.request, state => {
    return { ...state, isLoading: true };
  })
  .handleAction(noteGetAll.success, (state, { payload: { notes } }) => {
    return { ...state, notes: updateAll(state.notes, notes), isLoading: false };
  })
  .handleAction(noteSubscribeAll.success, (state, { payload: { notes } }) => {
    return { ...state, notes: updateAll(state.notes, notes), isLoading: false };
  })
  .handleAction(noteGet.request, state => {
    return { ...state, isLoading: true };
  })
  .handleAction(noteGet.success, (state, { payload: { note } }) => {
    return { ...state, notes: update(state.notes, note), isLoading: false };
  })
  .handleAction([noteGet.failure, noteGetAll.failure], state => {
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

function update<T extends { id: string }>(values: T[], newValue: T): T[] {
  const found = values.find(v => v.id === newValue.id) !== undefined;
  return found ? values.map(v => (v.id === newValue.id ? newValue : v)) : [newValue, ...values];
}

function updateAfter<T extends { id: string }>(values: T[], newValue: T): T[] {
  const found = values.find(v => v.id === newValue.id) !== undefined;
  return found ? values.map(v => (v.id === newValue.id ? newValue : v)) : [...values, newValue];
}

function updateAll<T extends { id: string }>(values: T[], newValues: T[]): T[] {
  return newValues.reduce((acc, newValue) => updateAfter(acc, newValue), values);
}
