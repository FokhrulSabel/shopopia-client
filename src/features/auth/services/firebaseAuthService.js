import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";



const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  return {
    user: {
      id: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL,
    },
    token: await result.user.getIdToken(),
  };
};

export const registerWithEmail = async ({ name, email, password }) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(result.user, {
    displayName: name,
  });

  return {
    user: {
      id: result.user.uid,
      name,
      email,
    },
    token: await result.user.getIdToken(),
  };
};

export const loginWithEmail = async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);

  return {
    user: {
      id: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL,
    },
    token: await result.user.getIdToken(),
  };
};

export const logoutUser = async () => {
  await signOut(auth);
};
