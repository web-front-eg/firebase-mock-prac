import { getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut
} from 'firebase/auth';

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
    const { status } = signInResponse;
    if (status == 201) {
      return true;
    } else {
      return false;
    }
  }

  async signInAsync(setAuthInfo) {
    // sign in thru GoogleAuthProvider()
    const result = await signInWithPopup(
      this._auth,
      this._googleAuthProvider
    ).catch(onRejected => {
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
    const http = HttpClient.getMethods();
    const response = await http
      .post('/api/user/signin', {
        params: {
          jwt: '4123k41sdasdafsda34jnk3fnwefkn246kj7467'
        }
      })
      .catch(err => {
        throw err;
      });
    console.log(response);

    const isValid = this._validateSignInResponse(response);

    // update auth info
    if (!isValid) {
      throw new Error('[SignIn] reponse is not valid!');
    }

    setAuthInfo({
      user
    });
  }

  async signOutAsync(setAuthInfo) {
    // dispose additional any header data before signou
    HttpClient.delHeaderAuthorization();
    setAuthInfo(null);

    // do sign-out
    return await fbSignOut(this._auth);
  }
  // #endregion behaviours
}

export default new Auth();
