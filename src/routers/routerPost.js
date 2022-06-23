const express = require('express');
const postController = require('../controller/postController');
const verifyAuthentication = require('../middlewares/verifyAuthentication');
const verifyEditPost = require('../middlewares/verifyEditPost');
const verifyNewPost = require('../middlewares/verifyNewPost');

const routerPost = express.Router();
routerPost.post('/', verifyAuthentication, verifyNewPost, postController.addPost);
routerPost.get('/:id', verifyAuthentication, postController.getById);
routerPost.get('/', verifyAuthentication, postController.getAll);
routerPost.put('/:id', verifyAuthentication, verifyEditPost, postController.editPost);
module.exports = routerPost;