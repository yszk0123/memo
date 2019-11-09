import { getCurrentPositionFromGeoLocation } from '../utils/getCurrentPositionFromGeoLocation';
import { getCurrentTime } from '../utils/getCurrentTime';
import { Coordinate } from './CoordinateType';
import { Doc } from './DocType';

export interface Note {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
  coordinate: Coordinate | null;
}

export async function createNote(doc: Doc, authorId: string, text: string): Promise<Note> {
  let coordinate: Coordinate | null = null;
  try {
    coordinate = await getCurrentPositionFromGeoLocation();
  } catch {
    /* nothing */
  }

  return {
    id: doc.id,
    text,
    authorId,
    createdAt: getCurrentTime(),
    coordinate,
  };
}
