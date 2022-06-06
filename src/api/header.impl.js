export class HeaderImpl {
  constructor(headers) {
    this._headers = headers;
  }

  setHeaderProp(key, val) {
    if (typeof val !== 'string') {
      throw new Error('val must be string');
    }

    this._headers[key] = val;
  }

  deleteHeaderProp(key) {
    if (typeof key !== 'string') {
      throw new Error('key must be string');
    }

    if (!Object.prototype.hasOwnProperty.call(this._headers, key)) {
      throw new Error('current axios header has no key inside it!');
    }

    this._headers[key] = undefined;
  }
}
