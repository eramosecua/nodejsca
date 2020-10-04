'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  };
  User.init({
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    disabled: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};