var express = require('express');
var router = express.Router();
let { trucks, parcelsId } = require('../database');


router.post('/', (req, res) => {
  const { parcel_weight, truck_id } = req.body;
  trucks.forEach((element) => {
    if(truck_id === element.id){
      element.parcels.push({id: parcelsId + 1, weight: parcel_weight})
      element.weight += parcel_weight;
      element.parcelsCount += 1;
    }
  })
  parcelsId++
  res.status(200).send("Parcel created")
  
})

router.delete('/', async (req, res) => {
  const {parcel_id} = req.body;
  trucks.forEach((truck) => {
    truck.parcels.forEach((element, index) => {
      if(element.id === parcel_id){
        truck.weight -= element.weight;
        truck.parcelsCount -= 1;
        truck.parcels.splice(index, 1);
        return ;
      }
    })
  })
  res.status(200).send("Parcel deleted")
})

module.exports = router;