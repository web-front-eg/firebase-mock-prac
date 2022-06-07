const { Server } = require('./server');

const MOCK_SERVER_PORT_NUM = 3004;
const MOCK_DB_JSON_NAME = 'db.json';

const server = new Server(MOCK_DB_JSON_NAME);

server.listen(MOCK_SERVER_PORT_NUM, process.env.ENV === 'development');
