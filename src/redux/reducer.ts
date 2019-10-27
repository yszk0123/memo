import { ValueOf } from '../types/CommonType';
import { createReducer } from '../types/ReduxType';
import { State } from '../types/StateType';
import { Action, ActionType } from './actions';

const initialState: State = {
  user: null,
};

export const reducer = createReducer<State, ActionType, ValueOf<Action>>(initialState, {
  [ActionType.USER_LOGIN_SUCCESS](state, { payload: { user } }) {
    return { ...state, user };
  },
  [ActionType.USER_LOGOUT_SUCCESS](state) {
    return { ...state, user: null };
  },
});
