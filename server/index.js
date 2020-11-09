const express = require("express");
const http = require("http");
const Equation = require("./models/equationSchema")
const mongoose = require("mongoose");
const router = require("./router.js");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cors = require("cors");


// mongoose.connect(keys.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });


mongoose.connect(keys.MONGODB_URI || 'mongodb://localhost/calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.on('connected', () => {
    console.log("connected")
})


const app = express();
  
  app.use(cors());
  
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  router(app);

  if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static("client/build"));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const port = process.env.PORT || 5000;
const server = http.createServer(app);

//Generate fake data

// let data = new Equation ({
//     problem: "PROBLEM" 
// })

// data.save();



server.listen(port);
console.log("Server listening on:", port);