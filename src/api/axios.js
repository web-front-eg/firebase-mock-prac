import axios from 'axios';
import { envMap } from '../env';

class Axi {
  //#region field
  // axios only instance
  _axi;
  //#endregion field

  // #region accessor
  get axi() {
    return this._axi;
  }

  getMethods(methodName = '') {
    const allMethods = {
      get: this._axi.get,
      post: this._axi.post,
      put: this._axi.put,
      delete: this._axi.put,
      patch: this._axi.patch
    };

    if (!methodName) {
      return allMethods;
    }

    return allMethods[methodName];
  }
  // #endregion accessor

  // #region ctor
  constructor() {
    const baseurl = envMap.get('mockBaseUrl') ?? 'http://localhost:3001';

    this._axi = axios.create({
      baseURL: baseurl
    });
  }
  // #endregion ctor

  // #region behaviour
  setHeaderProp(key, val) {
    if (typeof val !== 'string') {
      throw new Error('val must be string');
    }

    const headers = this.axi.defaults.headers;
    headers[key] = val;
    console.log('[setHeaderProp] after set!', key, headers);
  }

  delHeaderProp(key) {
    if (typeof key !== 'string') {
      throw new Error('key must be string');
    }

    const headers = this.axi.defaults.headers;
    if (!Object.prototype.hasOwnProperty.call(headers, key)) {
      throw new Error('current axios header has no key inside it!');
    }

    headers[key] = undefined;
    console.log('[delHeaderProp] after delete!', key, headers);
  }

  setHeaderAuthorization(token) {
    this.setHeaderProp('Authorization', `Bearer ${token}`);
  }

  delHeaderAuthorization() {
    this.delHeaderProp('Authorization');
  }
  // #endregion behaviour
}

export default new Axi();
