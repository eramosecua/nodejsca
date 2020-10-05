'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.hasOne(models.User);
      this.belongsTo(models.Profile);
      this.belongsTo(models.User);
    }
  };
  UserProfile.init({
    userId: DataTypes.STRING,
    profileId: DataTypes.STRING,
    active: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};