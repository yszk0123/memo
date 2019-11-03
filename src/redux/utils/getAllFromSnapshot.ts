import firebase from 'firebase';

export function getAllFromSnapshot<T>(snapshot: firebase.firestore.QuerySnapshot): T[] {
  const result: T[] = [];
  snapshot.forEach(doc => {
    result.push(doc.data() as T);
    return result;
  });
  return result;
}
