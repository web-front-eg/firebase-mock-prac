const jsonServer = require('json-server');
const { logMiddleware } = require('./logger.middleware');

class Middlewares {
  constructor() {
    this._defaultMiddlewares = jsonServer.defaults();
  }

  useMiddlewares(server) {
    server.use(this._defaultMiddlewares);
    server.use(logMiddleware);
  }
}

module.exports.Middlewares = Middlewares;
