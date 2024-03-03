const express = require('express');

const router = express.Router();

const ctrlTrips = require('../controllers/trips'); //  controller




router.get('/trips/',ctrlTrips.tripsList); // controller for getting all trips



router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode); // controller for getting trip by code


module.exports = router;