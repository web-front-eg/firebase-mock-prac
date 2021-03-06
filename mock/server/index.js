const jsonServer = require('json-server');

const { Middlewares } = require('../middleware');
const { Routes } = require('../routes');

class Server {
  constructor(mockDBJsonFileName) {
    this._server = jsonServer.create();

    this._middlewaresImpl = new Middlewares();
    this._middlewaresImpl.useMiddlewares(this._server);

    this._routeImpl = new Routes(mockDBJsonFileName);
    this._routeImpl.useRouters(this._server);
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

module.exports.Server = Server;
