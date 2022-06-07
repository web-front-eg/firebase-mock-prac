module.exports = (req, res, next) => {
  res.header('X-Hello', 'World');
  console.log('middleware called!');
  next();
};
