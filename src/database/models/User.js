module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'BlogPosts',
    });
  }
  return User;
};