//Create a models.js file to define the data models:
//interface - class

/*This file defines the data models using Mongoose's Schema and Model classes. In this example, a simple User model is defined with a name, age, and email field. This model is then exported to be used in the controller.js file for CRUD operations.*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

module.exports = mongoose.model('User', userSchema);