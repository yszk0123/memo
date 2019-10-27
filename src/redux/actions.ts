import { ReturnTypes } from '../types/CommonType';
import { Note } from '../types/NoteType';
import { createActionCreators } from '../types/ReduxType';
import { User } from '../types/UserType';

export enum ActionType {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  NOTE_ADD_REQUEST = 'NOTE_ADD_REQUEST',
  NOTE_ADD_SUCCESS = 'NOTE_ADD_SUCCESS',
  NOTE_REMOVE = 'NOTE_REMOVE',
}

export const actions = createActionCreators<ActionType>()({
  NOTE_ADD_REQUEST: (text: string) => ({ type: ActionType.NOTE_ADD_REQUEST, payload: { text } }),
  NOTE_ADD_SUCCESS: (note: Note) => ({ type: ActionType.NOTE_ADD_SUCCESS, payload: { note } }),
  NOTE_REMOVE: () => ({ type: ActionType.NOTE_REMOVE }),
  USER_LOGIN_REQUEST: () => ({ type: ActionType.USER_LOGIN_REQUEST }),
  USER_LOGIN_SUCCESS: (user: User) => ({ type: ActionType.USER_LOGIN_SUCCESS, payload: { user } }),
  USER_LOGOUT_REQUEST: () => ({ type: ActionType.USER_LOGOUT_REQUEST }),
  USER_LOGOUT_SUCCESS: () => ({ type: ActionType.USER_LOGOUT_SUCCESS }),
});

export type Action = ReturnTypes<typeof actions>;
