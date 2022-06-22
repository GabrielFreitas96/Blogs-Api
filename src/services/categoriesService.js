const { Category } = require('../database/models');

const addCategory = async (name) => {
  const category = await Category.create({ name });
  console.log('category no service', category);
  return category;
};

const categoriesService = { addCategory };
module.exports = categoriesService;