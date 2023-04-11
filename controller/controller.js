//Create a controller.js file to handle the CRUD operations:

/* This file contains the CRUD (Create, Read, Update, Delete) operations for the User model. It exports functions for each CRUD operation, such as createUser to create a new user, getAllUsers to get all users, getUserById to get a user by ID, updateUserById to update a user by ID, and deleteUserById to delete a user by ID. These functions use the User model from the models.js file to interact with the MongoDB database and perform the respective CRUD operation.*/

const User = require('./models'); // Import the User model

// Create a user
const createUser = (req, res) => {
  const { name, age, email } = req.body;
  const newUser = new User({ name, age, email });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
};

// Get all users
const getAllUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
};

// Get a user by ID
const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
};

// Update a user by ID
const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  User.findByIdAndUpdate(id, { name, age, email }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
};

// Delete a user by ID
const deleteUserById = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};