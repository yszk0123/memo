import { ValueOf } from '../types/CommonType';
import { createReducer } from '../types/ReduxType';
import { State } from '../types/StateType';
import { identity } from '../utils/identity';
import { Action, ActionType } from './actions';

const initialState: State = {
  user: undefined,
};

export const reducer = createReducer<State, ActionType, ValueOf<Action>>(initialState, {
  [ActionType.USER_LOGIN_REQUEST]: identity,
  [ActionType.USER_LOGOUT]: identity,
});
