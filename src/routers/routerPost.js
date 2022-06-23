const express = require('express');
const postController = require('../controller/postController');
const verifyAuthentication = require('../middlewares/verifyAuthentication');
const verifyNewPost = require('../middlewares/verifyNewPost');

const routerPost = express.Router();
routerPost.post('/', verifyAuthentication, verifyNewPost, postController.addPost);
routerPost.get('/', verifyAuthentication, postController.getAll);
module.exports = routerPost;