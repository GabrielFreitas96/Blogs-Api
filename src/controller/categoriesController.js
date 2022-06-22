const categoriesService = require('../services/categoriesService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoriesService.addCategory(name);
  res.status(201).json(response); 
};

const categoriesController = { addCategory };
module.exports = categoriesController;