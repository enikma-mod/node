// routes.js


/* This file defines the routes using Express, a popular web framework for Node.js. It exports an Express router that handles different HTTP endpoints for the User model. For example, it defines a POST route for creating a user, a GET route for getting all users, a GET route for getting a user by ID, a PUT route for updating a user by ID, and a DELETE route for deleting a user by ID. These routes use the corresponding CRUD functions from the controller.js file to handle the respective HTTP requests and responses.*/

const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('./controller'); // Import the controller functions

// Create a user
router.post('/users', createUser);

// Get all users
router.get('/users', getAllUsers);

// Get a user by ID
router.get('/users/:id', getUserById);

// Update a user by ID
router.put('/users/:id', updateUserById);

// Delete a user by
router.delete('/users/:id',deleteUserById );