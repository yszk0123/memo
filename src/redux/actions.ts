import { ReturnTypes } from '../types/CommonType';
import { Note } from '../types/NoteType';
import { createActionCreators } from '../types/ReduxType';
import { User } from '../types/UserType';

export enum ActionType {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  NOTE_REMOVE_REQUEST = 'NOTE_REMOVE_REQUEST',
  NOTE_REMOVE_SUCCESS = 'NOTE_REMOVE_SUCCESS',
  NOTE_UPDATE_REQUEST = 'NOTE_UPDATE_REQUEST',
  NOTE_UPDATE_SUCCESS = 'NOTE_UPDATE_SUCCESS',
  NOTE_GET_ALL_REQUEST = 'NOTE_GET_ALL_REQUEST',
  NOTE_GET_ALL_SUCCESS = 'NOTE_GET_ALL_SUCCESS',
  NOTE_ADD_REQUEST = 'NOTE_ADD_REQUEST',
  NOTE_ADD_SUCCESS = 'NOTE_ADD_SUCCESS',
}

export const actions = createActionCreators<ActionType>()({
  NOTE_ADD_REQUEST: (text: string) => ({ type: ActionType.NOTE_ADD_REQUEST, payload: { text } }),
  NOTE_ADD_SUCCESS: (note: Note) => ({ type: ActionType.NOTE_ADD_SUCCESS, payload: { note } }),
  NOTE_REMOVE_REQUEST: (noteId: string) => ({
    type: ActionType.NOTE_REMOVE_REQUEST,
    payload: { noteId },
  }),
  NOTE_REMOVE_SUCCESS: (noteId: string) => ({
    type: ActionType.NOTE_REMOVE_SUCCESS,
    payload: { noteId },
  }),
  NOTE_UPDATE_REQUEST: () => ({ type: ActionType.NOTE_UPDATE_REQUEST }),
  NOTE_UPDATE_SUCCESS: () => ({ type: ActionType.NOTE_UPDATE_SUCCESS }),
  USER_LOGIN_REQUEST: () => ({ type: ActionType.USER_LOGIN_REQUEST }),
  USER_LOGIN_SUCCESS: (user: User) => ({ type: ActionType.USER_LOGIN_SUCCESS, payload: { user } }),
  USER_LOGOUT_REQUEST: () => ({ type: ActionType.USER_LOGOUT_REQUEST }),
  USER_LOGOUT_SUCCESS: () => ({ type: ActionType.USER_LOGOUT_SUCCESS }),
  NOTE_GET_ALL_REQUEST: () => ({ type: ActionType.NOTE_GET_ALL_REQUEST }),
  NOTE_GET_ALL_SUCCESS: (notes: Note[]) => ({
    type: ActionType.NOTE_GET_ALL_SUCCESS,
    payload: { notes },
  }),
});

export type Action = ReturnTypes<typeof actions>;
