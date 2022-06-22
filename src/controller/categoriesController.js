const categoriesService = require('../services/categoriesService');

const getAll = async (req, res) => {
  const response = await categoriesService.getAll();
  res.status(200).json(response);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoriesService.addCategory(name);
  res.status(201).json(response); 
};

const categoriesController = { addCategory, getAll };
module.exports = categoriesController;