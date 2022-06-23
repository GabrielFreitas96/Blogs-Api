const express = require('express');
const userController = require('../controller/userController');
const verifyNewUser = require('../middlewares/verifyNewUser');
const verifyAuthentication = require('../middlewares/verifyAuthentication');

const routerUser = express.Router();
routerUser.get('/:id', verifyAuthentication, userController.getById);
routerUser.get('/', verifyAuthentication, userController.getAll);
routerUser.post('/', verifyNewUser, userController.addUser);
routerUser.delete('/me', verifyAuthentication, userController.deleteUser);

module.exports = routerUser;