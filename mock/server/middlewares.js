class Middleware {
  constructor(server) {
    if (!server) {
      throw new Error("[no instance] server is null");
    }

    this._middlewares = server.defaults();
  }

  _middlewares;
  get middlewares() {
    return this._middlewares;
  }
}

module.exports.Middlewares = Middleware;
