'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
      
    }
  };
  Option.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};