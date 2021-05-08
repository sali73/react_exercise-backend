const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const calculatorController = require("./controllers/calculator.js");
const db = mongoose.connection;
const MONGO_URI = process.env.MONGODB_URL || "mongodb://localhost:27017/cul";

//==| Cross Origin Resource Sharing + Whitelist |
const whitelist = ["http://localhost:3000", MONGO_URI];
const corsOptions = {
  origin: function (origin, cb) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not permitted by Cross Origin Resource Sharing (CORS)!")
      );
    }
  },
};

//==| DATABASE CONNECTION |
mongoose.connect(
  "mongodb+srv://salimohamed:Sa101209ah@@cluster0.l7sxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on("open", () => {
  console.log("🌐    Connected to MONGO.    🌐");
  console.log(`-------------------------------`);
});
db.on("error", (error) => {
  console.log("🚨 MONGO HAS ENCOUNTERED AN ERROR 🚨");
  console.log(error);
  console.log("🚨 ------------------------------ 🚨");
});

// require('custom-env').env()
// app.js or server.js
require("dotenv").config();
// REST OF YOUR CODE

////////////////////
//Middelwear
////////////////////
app.use(cors()); // Adding cors to allow API to be called
app.use(express.json());
app.use("/cul", calculatorController);

//==| PORT LISTENER |
app.listen(PORT, (error) => {
  console.log(`-------------------------------`);
  console.log(`🌐 Listening on port: [${PORT}] 🌐`);
  console.log(`-------------------------------`);
});
