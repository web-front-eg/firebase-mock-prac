const path = require('path');

class Router {
  constructor(server, jsonPath) {
    if (!server) {
      throw new Error('[no instance] server is null');
    }

    if (typeof jsonPath !== 'string') {
      throw new Error('[type mismatch] jsonPath must be string');
    }

    if (jsonPath === '') {
      throw new Error('[empty str] jsonPath cannot be empty');
    }

    this._router = server.router(path.join(__dirname, '../model/', jsonPath));
  }

  _router;
  get router() {
    return this._router;
  }

  setRoute() {}
}

module.exports.Router = Router;
