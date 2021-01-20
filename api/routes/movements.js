var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.json([
    {
      start: [53.9333, 116.5765],
      end: [51.0447, 114.0719],
      description:
        "This is a very important test freight from Alberta to Calgary",
    },
    {
      start: [43.65107, -79.347015],
      end: [45.5017, 73.5673],
      description: "This is a very important test freight from TOR to MRL",
    },
  ]);
});

module.exports = router;
