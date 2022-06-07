module.exports = (req, res, next) => {
  console.log('middleware called!');
  
  next();
};
