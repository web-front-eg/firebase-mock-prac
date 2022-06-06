export class MethodsImpl {
  constructor(axios) {
    this._axios = axios;
  }

  get methods() {
    const allMethods = {
      get: this._axi.get,
      post: this._axi.post,
      put: this._axi.put,
      delete: this._axi.put,
      patch: this._axi.patch
    };

    return allMethods;
  }
}
