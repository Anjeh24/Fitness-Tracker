const router = require("express").Router();
const db = require("../models");
require('mongoose')
//const Transaction = require("../models/fitness.js");

router.post("/api/fitness", ({ body }, res) => {
  fitness.create(body)
    .then(dbfitness => {
      res.json(dbfitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get("/api/fitness", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbfitness => {
      res.json(dbfitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
