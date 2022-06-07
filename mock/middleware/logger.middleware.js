const logMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }

  next();
};

module.exports.logMiddleware = logMiddleware;
