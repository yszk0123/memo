import firebase from 'firebase';

export function getFromSnapshot<T>(snapshot: firebase.firestore.DocumentSnapshot): T | null {
  return snapshot.exists ? (snapshot.data() as T) : null;
}
