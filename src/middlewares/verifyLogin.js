// const userService = require('../services/userService');

const verifyLogin = (req, res, next) => {
const { email, password } = req.body;
// console.log('No middlewares: email', email, 'password', password);
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};
module.exports = verifyLogin;