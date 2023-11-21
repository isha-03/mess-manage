const express=require("express");
const router=express.Router();

//Import Controller

const {createTrip,getTrips}=require("../controllers/tripController");


//Map with requests
router.post("/trips/create",createTrip);
router.get("/trips",getTrips);


//export
module.exports=router;