const router = require("express").Router();

//home routes
router.get("/", (req, res) => {
  res.send("welcome to express home");
});

//about routes
router.get("/about", (req, res) => {
  res.send("welcome to express about page");
});

module.exports = router;
