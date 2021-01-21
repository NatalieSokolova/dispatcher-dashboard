var express = require("express");
const { start } = require("repl");
var router = express.Router();

let movementList = [
  {
    start: "53.9333, 116.5765",
    end: "51.0447, 114.0719",
    description:
      "This is a very important test freight from Alberta to Calgary",
  },
  {
    start: "43.65107, -79.347015",
    end: "45.5017, 73.5673",
    description: "This is a very important test freight from TOR to MRL",
  },
];
router.get("/", (req, res) => {
  res.json(movementList);
});

router.post("/", (req, res) => {
  console.log(req.body);
  movementList.push(req.body);
  res.send("movement added!");
});

router.delete("/", (req, res) => {
  console.log("DELETE BODY: ", req.body);
  movementList.splice(req.body.index, 1);
  console.log("movementList: ", movementList);
  res.send("movement deleted!");
});

module.exports = router;
