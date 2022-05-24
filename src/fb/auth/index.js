import { getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut } from 'firebase/auth';

import HttpClient from '../../api/axios';

class Auth {
  // #region field
  _auth;
  _googleAuthProvider;
  // #endregion field

  // #region ctor
  constructor() {
    const app = getApp();
    if (!app) {
      throw new Error('[auth] Firebase App Initialisation failed!');
    }

    this._auth = getAuth(app);
    this._googleAuthProvider = new GoogleAuthProvider();
  }
  // #endregion ctor

  // #region behaviours

  _validateSignInResponse(signInResponse) {
    if (signInResponse) return true;
    else return false;
  }

  async signInAsync(setAuthInfo) {
    // sign in thru GoogleAuthProvider()
    const result = await signInWithPopup(this._auth, this._googleAuthProvider).catch(onRejected => {
      throw new Error(
        '[error][auth][google] result from signInWithPopup + GoogleAuthProvider failed!',
        onRejected
      );
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
      throw new Error('[SignIn] reponse is not valid!');
    }

    setAuthInfo({
      user
    });
  }

  async signOutAsync() {
    // dispose additional any header data before signou
    HttpClient.delHeaderAuthorization();

    // do sign-out
    return await fbSignOut(this._auth);
  }
  // #endregion behaviours
}

export default new Auth();
