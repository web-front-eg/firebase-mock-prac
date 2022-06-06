const jsonServer = require('json-server');
const path = require('path');
const { getPostById } = require('./controller/post.controller');

const MOCK_SERVER_PORT_NUM = 3004;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.get('/posts/{:id}', getPostById);

server.use(middlewares);
server.use(router);

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.listen(MOCK_SERVER_PORT_NUM, () => {
  console.log('JSON server runs at ' + MOCK_SERVER_PORT_NUM);
});
