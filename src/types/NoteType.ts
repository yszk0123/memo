import { generateId } from '../utils/generateId';
import { getCurrentTime } from '../utils/getCurrentTime';

export interface Note {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
}

export function createNote(authorId: string, text: string): Note {
  return {
    id: generateId(),
    text,
    authorId,
    createdAt: getCurrentTime(),
  };
}
