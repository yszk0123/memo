import { State } from '../types/StateType';

export const selectors = {
  user: (state: State) => state.user,
  notes: (state: State) => state.notes,
};
