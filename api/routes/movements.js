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
    description:
      "This is a very important test freight from Toronto to Montreal",
  },
  {
    startLat: "45.5017",
    startLong: "-73.5673",
    endLat: "47.5615",
    endLong: "-52.7126",
    description:
      "This is a very important test freight from Montreal to St. John's",
  },
  {
    startLat: "45.5051",
    startLong: "-122.6750",
    endLat: "43.65107",
    endLong: "-79.347015",
    description:
      "This is a very important test freight from Portland to Toronto",
  },
];

router.get("/", (req, res) => {
  res.json(movementList);
});

router.post("/", (req, res) => {
  movementList.push(req.body);
  res.status(201).send("movement added!");
});

router.delete("/", (req, res) => {
  movementList.splice(req.body.index, 1);
  res.send("movement deleted!");
});

router.put("/", (req, res) => {
  movementList.splice(req.body.data.index, 1, req.body.data.movement);
  res.send("movement udated!");
});

module.exports = router;
