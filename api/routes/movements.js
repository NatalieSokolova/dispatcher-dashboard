var express = require("express");
var router = express.Router();

// a placeholder for a database
let movementList = [
  {
    startLat: "53.9333",
    startLong: "-116.5765",
    endLat: "51.0447",
    endLong: "-114.0719",
    description:
      "This is a very important test freight from Alberta to Calgary",
  },
  {
    startLat: "43.65107",
    startLong: "-79.347015",
    endLat: "45.5017",
    endLong: "-73.5673",
    description: "This is a very important test freight from TOR to MRL",
  },
];

router.get("/", (req, res) => {
  res.json(movementList);
});

router.post("/", (req, res) => {
  console.log("POST BODY: ", req.body);
  movementList.push(req.body);
  res.status(201).send("movement added!");
});

router.delete("/", (req, res) => {
  console.log("DELETE BODY: ", req.body);
  movementList.splice(req.body.index, 1);
  console.log("movementList: ", movementList);
  res.send("movement deleted!");
});

router.put("/", (req, res) => {
  console.log("UPDATE BODY: ", req.body);
  movementList.splice(req.body.data.index, 1, req.body.data.movement);
  res.send("movement udated!");
});

module.exports = router;
