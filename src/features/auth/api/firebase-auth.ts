import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { app } from '@/shared/lib/firebase/firebase-app';

const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const loginWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

const signOutUser = () => {
  return signOut(auth);
};

export { registerUser, loginUser, loginWithGoogle, signOutUser };
export const auth = getAuth(app);
