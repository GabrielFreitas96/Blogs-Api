const loginService = require('../services/loginService');

const newLogin = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.authenticateLogin(email, password);
  if (!response) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  res.status(200).json({ token: response });
};

const loginController = { newLogin };
module.exports = loginController;