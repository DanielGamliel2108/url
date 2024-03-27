
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const hbs = require("express-handlebars");
const urlRouter=require("./api/v1/routes/url")
// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
      // mongodb connection string
      await mongoose.connect("mongodb+srv://danielg210898:daniel1998@cluster0.h6tw5fh.mongodb.net/"+"Ecom");
      console.log('mongoDB connected.');
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
  // connect to mongoDB
  connectDB();
  
  // Set EJS as the view engine
  app.set('view engine', 'hbs');
  
  // Middleware for handling JSON, URL-encoded data, and serving static files
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static('public'));
  


  app.engine(
    "hbs",
    hbs.engine({
      extname: "hbs",
      defaultView: "index",
      layoutsDir: __dirname + "/views/layouts", // נתיב לתיקיית ה-layouts
      partialsDir: __dirname + "/views/partials", // נתיב לתיקיית ה-partials
    })
  );


  app.use("/",urlRouter)

    // start the server and listen on PORT 5050
app.listen(5050, () => {
    console.log(`App running on port 5050`);
     });