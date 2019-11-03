import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { firebase, GoogleAuthProvider } from '../../firebase';
import { User } from '../../types/UserType';
import { userLogin, userLogout } from '../actions';

function toUser(user: firebase.User): User {
  return { id: user.uid, displayName: user.displayName };
}

export function useUserStatusSubscribe(): void {
  const dispatch = useDispatch();

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
  }, [dispatch]);
}

export function useUserLogin(): () => void {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(userLogin.request());

    const provider = new GoogleAuthProvider();
    const auth = firebase.auth();
    auth.signInWithRedirect(provider);
  }, [dispatch]);
}

export function useUserLogout(): () => Promise<void> {
  const dispatch = useDispatch();

  return useCallback(async () => {
    dispatch(userLogout.request());

    const auth = firebase.auth();
    await auth.signOut();

    dispatch(userLogout.success());
  }, [dispatch]);
}
