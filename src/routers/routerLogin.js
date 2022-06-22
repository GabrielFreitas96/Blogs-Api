const express = require('express');
const loginController = require('../controller/loginController');
const verifyLogin = require('../middlewares/verifyLogin');

const routerLogin = express.Router();

routerLogin.post('/', verifyLogin, loginController.newLogin);

module.exports = routerLogin;