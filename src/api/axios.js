import axios from 'axios';
import { envMap } from '../env';

class Axi {
  //#region field
  _axi;
  //#endregion field

  // #region accessor
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

  get _getHeaders() {
    return this._axi.defaults.headers;
  }
  // #endregion accessor

  // #region ctor
  constructor() {
    const baseurl = envMap.get('baseurl') ?? 'http://localhost:3001';

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
    this._getHeaders()[key] = val;
    console.log('[setHeaderProp] after set!', key, this._axi.defaults);
  }

  delHeaderProp(key) {
    if (typeof key !== 'string') {
      throw new Error('key must be string');
    }

    this._getHeaders()[key] = undefined;
    console.log('[setHeaderProp] after delete!', key, this._axi.defaults);
  }

  setHeaderAuthorization(token) {
    this._axi.setHeaderProp('Authorization', `Bearer ${token}`);
  }

  delHeaderAuthorization() {
    this._axi.delHeaderProp('Authorization');
  }
  // #endregion behaviour
}

export default new Axi();
