export class MethodsImpl {
  constructor(axios) {
    this._axi = axios;
  }

  get methods() {
    return {
      get: this._axi.get,
      post: this._axi.post,
      put: this._axi.put,
      delete: this._axi.put,
      patch: this._axi.patch
    };
  }
}
