import { getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

import HttpClient from '../../api/axios';

class Auth {
  _auth;
  _googleAuthProvider;

  constructor() {
    const app = getApp();
    if (!app) {
      throw new Error('[auth] Firebase App Initialisation failed!');
    }

    this._auth = getAuth(app);
    this._googleAuthProvider = new GoogleAuthProvider();
  }

  _validateSignInResponse(signInResponse) {
    if (signInResponse) return true;
    else return false;
  }

  async signInAsync(setAuthInfo) {
    // sign in using GoogleAuthProvider()
    const result = await signInWithPopup(
      this._auth,
      this._googleAuthProvider
    ).catch(reason => {
      throw reason.displayName;
    });

    // get a Google Access Token which can be used to access to the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const jwt = credential.accessToken;

    // The current Google user info.
    const user = result.user;

    // load jwt to send web request
    HttpClient.setHeaderAuthorization(jwt);

    // send sign in web request
    // const response = await HttpClient.getMethods()
    //   .get('user/me')
    //   .then(err => {
    //     throw err;
    //   });

    // const isValid = this._validateSignInResponse(response);
    const isValid = true;

    // update auth info
    if (!isValid) {
      throw new Error('[SignIn] response is not valid!');
    }

    setAuthInfo({ user });
  }

  async signOutAsync(setAuthInfo) {
    // dispose additional any header data before signou
    HttpClient.delHeaderAuthorization();

    // do sign-out
    await signOut(this._auth);

    setAuthInfo({ user: null });
  }
}

export default new Auth();
