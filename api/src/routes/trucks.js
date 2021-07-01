var express = require('express');
var router = express.Router();
const { trucks } = require('../database');

router.get('/', (req, res) => {
  res.status(200).json(trucks);
});

router.post('/', (req, res) => {
  trucks.push({id: trucks.length + 1, weight: 0, parcelsCount: 0, parcels: []});
  res.status(200).send("Truck was created succesfully");
})

module.exports = router;
