module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
    name: DataTypes.STRING,
  });
  Category.associate = (models) => {
    Category.hasMany(models.PostCategories, {
      foreignKey: 'categoryId',
      as: 'categories',
    });
  }
  return Category;
};