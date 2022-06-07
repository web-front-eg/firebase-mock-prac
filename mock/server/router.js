const path = require('path');
const jsonServer = require('json-server');

class Router {
  constructor(jsonPath) {
    if (typeof jsonPath !== 'string') {
      throw new Error('[type mismatch] jsonPath must be string');
    }

    if (jsonPath === '') {
      throw new Error('[empty str] jsonPath cannot be empty');
    }

    this._defaultRoutes = jsonServer.router(
      path.join(__dirname, '../model/', jsonPath)
    );
    this._customRoutes = new Map();
  }

  useRouters(server) {
    server.use(jsonServer.bodyParser);

    server.use(this._customRoutes);
    server.use(this._defaultRoutes);
  }
}

module.exports.Router = Router;
