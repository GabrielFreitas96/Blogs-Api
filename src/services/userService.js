const { User } = require('../database/models');
const generateToken = require('../helpers/jwtTokenGenerate');
const decodeEmail = require('../helpers/decodeEmail');

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
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};
const addUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  // console.log('newUser no service', newUser);
  const token = generateToken(newUser.email);
  // console.log('token no service', token);
  return token;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  console.log('user no service', user);
  return user;
};

const getEmailById = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return user.id;
  }
  return user;
};

const deleteUser = async (token) => {
  const email = decodeEmail(token);
  const id = await getEmailById(email);
  console.log('id do usuario logado', id);
  await User.destroy({ where: { id } });
};

const userService = { getUserByEmail,
  getAll,
  addUser,
  getEmail,
  getById,
  getEmailById,
  deleteUser };
module.exports = userService;