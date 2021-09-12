const router = require("express").Router();
const workout = require("../models/workout");
const db = require("../models/workout");
require('mongoose')
//const Transaction = require("../models/fitness.js");

// route for getting all exercises/ workouts
router.get("/api/workout", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get("/api/workout/range", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/api/workout", ({ body }, res) => {
	db.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

//Route to update workout
router.put("/api/workout/:id", ({ body, params }, res) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
