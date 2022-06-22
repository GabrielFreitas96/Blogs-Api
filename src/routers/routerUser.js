const express = require('express');
const userController = require('../controller/userController');
const verifyNewUser = require('../middlewares/verifyNewUser');

const routerUser = express.Router();

routerUser.get('/', userController.getAll);
routerUser.post('/', verifyNewUser, userController.addUser);

module.exports = routerUser;