const userService = require('../services/userService');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  console.log('users no controller', users);
  res.status(200).json(users);
};

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const emailBD = await userService.getUserByEmail(email);
  console.log('emailBD no userController', emailBD);
  if (emailBD) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const response = await userService.addUser(displayName, email, password, image);
  res.status(201).json(response);
};

const userController = { getAll, addUser };

module.exports = userController;