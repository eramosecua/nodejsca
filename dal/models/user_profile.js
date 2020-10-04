'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    static associate(models) {
      this.hasOne(models.User);
      this.hasOne(models.Profile);
    }
  };
  UserProfile.init({
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    profileId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};