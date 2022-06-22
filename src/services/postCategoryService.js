const { PostCategory } = require('../database/models');

const addPostCategory = async (postId, categoryId) => {
  const add = await PostCategory.create({ postId, categoryId });
  return add;
};

const postCategoryService = { addPostCategory };
module.exports = postCategoryService;