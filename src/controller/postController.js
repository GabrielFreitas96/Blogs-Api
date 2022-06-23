const postCategoryService = require('../services/postCategoryService');
const postService = require('../services/postService');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const response = await postService.addPost(token, title, content, categoryIds);
  if (!response) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  const awaitOperation = categoryIds.map(async (item) => {
    await postCategoryService.addPostCategory(response.id, item);
  });
  await Promise.all(awaitOperation);
res.status(201).json(response);
};

const getAll = async (req, res) => {
  const response = await postService.getAll();
  res.status(200).json(response); 
};

const postController = { addPost, getAll };
module.exports = postController;