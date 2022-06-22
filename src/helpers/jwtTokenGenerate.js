require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
};

module.exports = generateToken;
