//Create a config.js file to handle the database connection:

/*  This file handles the database connection using Mongoose, a popular Object Data Modeling (ODM) library for MongoDB in Node.js. It exports a connectDB function that connects to the MongoDB database using the MongoDB connection string and options passed as arguments to the mongoose.connect() method. This function is then imported and called in the app.js file to establish the database connection.*/

const mongoose = require('mongoose');

const connectDB = () => {
  //mongoDB URL connection
  mongoose.connect('mongodb+srv://sirmodika:OvNUr4N9KuIxK4P1@cluster0.rvtymga.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
};

module.exports = connectDB;