import axios from 'axios';
import { envMap } from '../env';
import { HeaderImpl } from './impl/header.impl';
import { MethodsImpl } from './impl/methods.impl';
import { AuthorizationImpl } from './impl/authorization.impl';

class Axi {
  constructor(axiConstructLayout = { isDevelopment: true }) {
    this._isDevelopment = axiConstructLayout.isDevelopment;

    const baseurl = envMap.get('mockBaseUrl') ?? 'http://localhost:3001';

    this._axi = axios.create({
      baseURL: baseurl
    });

    this._methodsProvider = new MethodsImpl(this._axi);

    const headers = this.headers;

    this._headerImpl = new HeaderImpl(headers);

    this._authImpl = new AuthorizationImpl(
      this._headerImpl.setHeaderProp,
      this._headerImpl.deleteHeaderProp
    );
  }

  //#region fields
  _axi;
  _methodsProvider;
  _authImpl;

  _isDevelopment;

  get headers() {
    return this._axi.defaults.headers;
  }

  get methods() {
    return this._methodsProvider.methods;
  }

  //#endregion fields

  //#region behaviour
  setHeaderProp(key, val) {
    this._headerImpl.setHeaderProp(key, val);

    if (this._isDevelopment)
      console.log('[setHeaderProp] after set!', key, this._headers);
  }

  deleteHeaderProp(key) {
    this._headerImpl.deleteHeaderProp(key);

    if (this._isDevelopment)
      console.log('[delHeaderProp] after delete!', key, this._headers);
  }

  setHeaderAuthorization(token) {
    this._authImpl.setHeaderAuthorization(token);
  }

  delHeaderAuthorization() {
    this._authImpl.delHeaderAuthorization();
  }

  //#endregion behaviour
}

export default new Axi({
  isDevelopment: process.env.ENV === 'development'
});
