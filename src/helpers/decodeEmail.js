const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const decodeEmail = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded.data;
};

module.exports = decodeEmail;