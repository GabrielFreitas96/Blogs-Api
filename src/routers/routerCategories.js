const express = require('express');
const categoriesController = require('../controller/categoriesController');
const verifyAuthentication = require('../middlewares/verifyAuthentication');
const verifyNewCategory = require('../middlewares/verifyNewCategory');

const routerCategories = express.Router();
routerCategories.post('/', verifyAuthentication,
verifyNewCategory, categoriesController.addCategory);

module.exports = routerCategories;