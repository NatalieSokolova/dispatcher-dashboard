var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("YAY!!! TEST API is working properly");
});

module.exports = router;
