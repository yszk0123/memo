import { createAction, createAsyncAction } from 'typesafe-actions';

import { Note } from '../types/NoteType';
import { User } from '../types/UserType';

export const userLogin = createAsyncAction(
  ['user/login/request', undefined],
  ['user/login/success', (user: User) => ({ user })],
  ['user/login/failure', undefined],
)();
export const userLogout = createAsyncAction(
  ['user/logout/request', undefined],
  ['user/logout/success', undefined],
  ['user/logout/failure', undefined],
)();

export const noteReset = createAction('note/reset')();
export const noteRemove = createAsyncAction(
  ['note/remove/request', (noteId: string) => ({ noteId })],
  ['note/remove/success', (noteId: string) => ({ noteId })],
  ['note/remove/failure', undefined],
)();
export const noteAdd = createAsyncAction(
  ['note/add/request', (text: string) => ({ text })],
  ['note/add/success', (note: Note) => ({ note })],
  ['note/add/failure', undefined],
)();
export const noteUpdate = createAsyncAction(
  ['note/update/request', (noteId: string, text: string) => ({ noteId, text })],
  ['note/update/success', (note: Note) => ({ note })],
  ['note/update/failure', undefined],
)();
export const noteGet = createAsyncAction(
  ['note/get/request', undefined],
  ['note/get/success', (note: Note) => ({ note })],
  ['note/get/failure', undefined],
)();
export const noteGetAll = createAsyncAction(
  ['note/getAll/request', undefined],
  ['note/getAll/success', (notes: Note[]) => ({ notes })],
  ['note/getAll/failure', undefined],
)();
export const noteSubscribeAll = createAsyncAction(
  ['note/subscribeAll/request', undefined],
  ['note/subscribeAll/success', (notes: Note[]) => ({ notes })],
  ['note/subscribeAll/failure', undefined],
)();
