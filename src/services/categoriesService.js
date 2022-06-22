const { Category } = require('../database/models');

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const addCategory = async (name) => {
  const category = await Category.create({ name });
  console.log('category no service', category);
  return category;
};

const categoriesService = { addCategory, getAll };
module.exports = categoriesService;