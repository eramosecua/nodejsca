'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      this.hasMany(models.Permission, {
        foreignKey: 'profileId',
        as: 'permissions'
      });
    }
  };
  Profile.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};