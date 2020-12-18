const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    
    }, {
      sequelize
    })
  }
static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'categ_id', as: 'product' });
 
  }
}

module.exports = Category;