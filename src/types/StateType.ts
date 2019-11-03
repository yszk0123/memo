import { Note } from './NoteType';
import { User } from './UserType';

export interface State {
  user: User | null;
  notes: Note[];
  isLoading: boolean;
}
