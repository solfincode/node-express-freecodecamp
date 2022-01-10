const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log("print logger", method, url);
  next();
};

module.exports = logger;
