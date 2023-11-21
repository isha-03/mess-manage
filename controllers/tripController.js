const Trip = require('../models/tripModel');

exports.createTrip = async (req, res) => {
    console.log("Inside create trips controller");
  try {
    console.log("inside try");
    const { source, dest, date, genderPreference, duration } = req.body;
    console.log({ source, dest, date, genderPreference, duration });
    const newTrip = await Trip.create({
      source,
      dest,
      date,
      genderPreference,
      duration,
    });
    console.log("Suiiii");
    // const savedTrip = await newTrip.create();
    console.log("Here!");
    console.log(newTrip);
    res.json({  
      success: true,
      data: newTrip,
    });
    
} catch {
    console.log("end");
    res.status(500).json({
      success: false,
    });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(100).json({
      data: trips,
    });
  } catch {
    res.status(500).json({
      success: false,
    });
  }
};
