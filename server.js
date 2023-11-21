const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = 4259;

// Middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:4350'],
  methods: 'GET,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
};

// Enable CORS
app.use(cors(corsOptions));

// Routes
const trip = require("./routes/trip");
app.use("/api/v1", trip);

// Connect with DB
const dbConnect = require("./config/database");
dbConnect();

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at port: ${PORT}`);
});
