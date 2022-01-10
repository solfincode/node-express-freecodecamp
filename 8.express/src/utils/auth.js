const auth = (req, res, next) => {
  const { user } = req.query;
  if (user == "david") {
    req.user = { name: "david", id: 1 };
    console.log("authorized");
    next();
  } else {
    res.status(400).send("invalid");
  }
};

module.exports = auth;
