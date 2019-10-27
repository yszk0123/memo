import { ReturnTypes } from '../types/CommonType';
import { createActionCreators } from '../types/ReduxType';

export enum ActionType {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT = 'USER_LOGOUT',
  NOTE_ADD = 'NOTE_ADD',
  NOTE_REMOVE = 'NOTE_REMOVE',
}

export const actions = createActionCreators<ActionType>()({
  USER_LOGIN_REQUEST: () => ({ type: ActionType.USER_LOGIN_REQUEST }),
  USER_LOGIN_SUCCESS: () => ({ type: ActionType.USER_LOGIN_SUCCESS }),
  USER_LOGOUT: () => ({ type: ActionType.USER_LOGOUT }),
  NOTE_ADD: () => ({ type: ActionType.NOTE_ADD }),
  NOTE_REMOVE: () => ({ type: ActionType.NOTE_REMOVE }),
});

export type Action = ReturnTypes<typeof actions>;
