const jsonServer = require('json-server');

class Middleware {
  constructor() {
    this._defaultMiddlewares = jsonServer.defaults();
    this._customMiddlewares = new Map();
  }

  useMiddlewares(server) {
    server.use(this._defaultMiddlewares);
    server.use(this._customMiddlewares);
  }
}

module.exports.Middlewares = Middleware;
