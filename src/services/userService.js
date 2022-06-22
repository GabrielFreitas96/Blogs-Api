const { User } = require('../database/models');
const generateToken = require('../helpers/jwtTokenGenerate');

const getUserByEmail = async (email, password) => {
  const user = await User.findOne({ 
    where: { email, password },
    atributtes: ['email'],
    });
  console.log('user no service', user);
  return user;
};
const getEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  console.log('user no service', user);
  if (user) {
    return user.email;
  }
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};
const addUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  // console.log('newUser no service', newUser);
  const token = generateToken(newUser.email);
  // console.log('token no service', token);
  return token;
};

const userService = { getUserByEmail, getAll, addUser, getEmail };
module.exports = userService;