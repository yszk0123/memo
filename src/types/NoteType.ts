import { getCurrentTime } from '../utils/getCurrentTime';
import { Doc } from './DocType';

export interface Note {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
}

export function createNote(doc: Doc, authorId: string, text: string): Note {
  return {
    id: doc.id,
    text,
    authorId,
    createdAt: getCurrentTime(),
  };
}
