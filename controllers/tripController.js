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
    const { source, dest, date, genderPreference } = req.query;
    
    // Construct the query object based on provided parameters
    const query = {};
    if (source) query.source = source;
    if (dest) query.dest = dest;
    if (date) query.date = date;
    if (genderPreference) query.genderPreference = genderPreference;

    const trips = await Trip.find(query);
   
    res.json({
      success: true,
      data: trips,
    });
    console.log(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching trips',
    });
  }
};
