const userService = require('../services/userService');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  console.log('users no controller', users);
  res.status(200).json(users);
};

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const emailBD = await userService.getEmail(email);
  // console.log('emailBD no userController', emailBD);
  if (emailBD) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const response = await userService.addUser(displayName, email, password, image);
  res.status(201).json({ token: response });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.getById(+id);
  if (!response) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(response);
};

const userController = { getAll, addUser, getById };

module.exports = userController;