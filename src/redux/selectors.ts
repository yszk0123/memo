import { State } from '../types/StateType';

export const selectors = {
  user: (state: State) => state.user,
  notes: (state: State) => state.notes,
  note: (state: State, noteId: string | null) =>
    noteId === null ? null : state.notes.find(e => e.id === noteId) || null,
  isLoading: (state: State) => state.isLoading,
};
