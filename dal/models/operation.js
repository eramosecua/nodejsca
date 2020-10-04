'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    static associate(models) {
      this.hasMany(models.Operation, {
        foreignKey: 'parentId',
        as: 'children'
      });
      this.belongsTo(models.Operation);
      this.hasOne(models.Option)
    }
  };
  Operation.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    parentId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    optionId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    
  }, {
    sequelize,
    modelName: 'Operation',
  });
  return Operation;
};