const { User } = require('../database/models');

const getUserByEmail = async (email, password) => {
  const user = await User.findOne({ 
    where: { email, password },
    atributtes: ['email'],
    });
  console.log('user no service', user);
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};
const addUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  console.log('newUser no service', newUser);
  return newUser;
};

const userService = { getUserByEmail, getAll, addUser };
module.exports = userService;