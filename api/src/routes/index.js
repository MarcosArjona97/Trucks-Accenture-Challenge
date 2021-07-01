var express = require('express');
var router = express.Router();
const trucksRouter = require('./trucks.js');
const placersRouter = require('./parcels.js');

/* GET home page. */
router.use('/trucks', trucksRouter);
router.use('/parcels', placersRouter);

module.exports = router;
