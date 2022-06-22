const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const verifyAuthentication = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('token no middleware verify', token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log('decoded no middleware', decoded);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  // console.log('decoded no middleware', decoded);
  // if (!decoded) {
    
  // }
  next();
};

module.exports = verifyAuthentication;