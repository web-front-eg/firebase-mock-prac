const jsonServer = require('json-server');

const { Middlewares } = require('./middlewares');
const { Router } = require('./router');

class Server {
  _middlewaresImpl;
  _routeImpl;

  constructor(mockDBJsonFileName) {
    this._server = jsonServer.create();

    this._middlewaresImpl = new Middlewares(this.server);
    this._routeImpl = new Router(this.server, mockDBJsonFileName);

    this._use();
    this._route();
  }

  _server;
  get server() {
    return this._server;
  }

  _use() {
    this._server.use(this._middlewaresImpl.middlewares);
    this._server.use(this._routeImpl.router);
    this._server.use(jsonServer.bodyParser);
  }

  _route() {
    this._routeImpl.setRoute();
  }

  listen(portNum, useInitLog) {
    if (!useInitLog) {
      this._server.listen(portNum);
      return;
    }

    this._server.listen(portNum, hostName => {
      console.log(`[server] ${hostName} starts listening at ${portNum}`);
    });
  }
}

module.exports.server = Server;
