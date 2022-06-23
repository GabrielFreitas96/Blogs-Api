const { BlogPost, User, Category } = require('../database/models');
const decodeEmail = require('../helpers/decodeEmail');
const categoriesService = require('./categoriesService');
const userService = require('./userService');

const addPost = async (token, title, content, categoryIds) => {
  let searchCategory = true;
   const awaitOperation = categoryIds.map(async (item) => {
    const categorieFind = await categoriesService.getById(+item);
    if (!categorieFind) {
      searchCategory = false;
      return false;
    }
  });
  await Promise.all(awaitOperation);
  if (!searchCategory) {
    return null;
  }
  const email = decodeEmail(token);
  const userId = await userService.getEmailById(email);
  const postAdded = await BlogPost
  .create({ title, content, userId, published: new Date(), updated: new Date() });
  return postAdded;
  };
const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] }, 
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] }, 
    },
  ],
  });
  console.log('posts no service', posts);
  return posts;
};
const postService = { addPost, getAll };
module.exports = postService;