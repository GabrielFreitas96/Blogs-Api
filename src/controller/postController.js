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

const getById = async (req, res) => {
const { id } = req.params;
const postFind = await postService.getById(+id);
if (!postFind) {
 return res.status(404).json({ message: 'Post does not exist' });
}
res.status(200).json(postFind);
};

const editPost = async (req, res) => {
 const { id } = req.params;
 const { title, content } = req.body;
 await postService.editPost(id, title, content);
 const response = await postService.getById(+id);
 res.status(200).json(response);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
await postService.deletePost(+id);
res.status(204).json();
};

const searchByQuery = async (req, res) => {
  const { q } = req.query;
  console.log('q no controller', q);
  if (q === '') {
    const response = await postService.getAll();
    return res.status(200).json(response);
  }
  const response = await postService.getBySearch(q);
  if (!response) {
    return res.status(200).json([]);
  }
  res.status(200).json([response]);
};

const postController = { addPost, getAll, getById, editPost, deletePost, searchByQuery };
module.exports = postController;