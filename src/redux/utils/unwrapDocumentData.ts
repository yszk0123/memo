import firebase from 'firebase';

export function unwrapDocumentData<T>(data: firebase.firestore.DocumentData): T {
  return (data as unknown) as T;
}
