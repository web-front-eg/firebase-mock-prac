export class AuthorizationImpl {
  constructor(onSetHeaderProp, onDeleteHeaderProp) {
    this._onSetHeaderProp = onSetHeaderProp;
    this._onDeleteHeaderProp = onDeleteHeaderProp;
  }

  __AUTHORIZATION_KEY = 'Authorization';

  _onSetHeaderProp;
  _onDeleteHeaderProp;

  _token;
  _bearerString;

  /**
   * @param {string} token
   */
  set provideToken(token) {
    this._token = token;
    this._bearerString = `Bearer ${token}`;
  }

  setHeaderAuthorization(token) {
    this.provideToken(token);
    this._onSetHeaderProp(this.__AUTHORIZATION_KEY, this._bearerString);
  }

  delHeaderAuthorization() {
    this._onDeleteHeaderProp(this.__AUTHORIZATION_KEY);
  }
}
