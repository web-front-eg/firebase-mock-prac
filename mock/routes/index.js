const path = require('path');
const jsonServer = require('json-server');
const {
  mockServices: { getCommentById, getPostById, getProfileByName }
} = require('./mock');

class Routes {
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
  }

  useRouters(server) {
    server.use(jsonServer.bodyParser);

    server.get('/echo', (req, res) => {
      res.jsonp(req.query);
    });

    getPostById.mapRoute(server);
    getCommentById.mapRoute(server);
    getProfileByName.mapRoute(server);

    // 기본 json-server 방식 추가
    server.use(this._defaultRoutes);
  }
}

module.exports.Routes = Routes;
