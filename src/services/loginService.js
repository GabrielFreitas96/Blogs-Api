const userService = require('./userService');
const generateToken = require('../helpers/jwtTokenGenerate');

const authenticateLogin = async (email, password) => {
  const emailBD = await userService.getUserByEmail(email, password);
  if (!emailBD) {
    return null;
  }
  const token = generateToken(emailBD.email);
  return token;
};

const loginService = { authenticateLogin };
module.exports = loginService;