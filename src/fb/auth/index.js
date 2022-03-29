import { getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const auth = getAuth(getApp());

export const loginAsync = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    const user = userCredential.user;

    return {
      token,
      user,
    };
  } catch (firebaseErr) {
    const { code, message, email } = firebaseErr;
    const credential = GoogleAuthProvider.credentialFromError(firebaseErr);
    const token = credential.accessToken;

    console.error("fail to sign in with Google!", code, message, email, token);
  }
};

export const logoutAsync = async () => await signOut(auth);
