import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { firebase, GoogleAuthProvider } from '../../firebase';
import { User } from '../../types/UserType';
import { userLogin, userLogout } from '../actions';
import { useNoteGetAll } from './noteHooks';

function toUser(user: firebase.User): User {
  return { id: user.uid, displayName: user.displayName };
}

export function useUserStatusSubscribe() {
  const dispatch = useDispatch();
  const noteGetAll = useNoteGetAll();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(rawUser => {
      if (rawUser !== null) {
        const user = toUser(rawUser);
        dispatch(userLogin.success(user));
      } else {
        dispatch(userLogout.success());
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    noteGetAll();
  }, [noteGetAll]);
}

export function useUserLogin() {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(userLogin.request());

    const provider = new GoogleAuthProvider();
    const auth = firebase.auth();
    auth.signInWithRedirect(provider);
  }, [dispatch]);
}

export function useUserLogout() {
  const dispatch = useDispatch();

  return useCallback(async () => {
    dispatch(userLogout.request());

    const auth = firebase.auth();
    await auth.signOut();

    dispatch(userLogout.success());
  }, [dispatch]);
}
