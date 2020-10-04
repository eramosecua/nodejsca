'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      this.hasOne(models.Operation);
      this.hasOne(models.Profile);
    }
  };
  Permission.init({
    active: DataTypes.BOOLEAN,
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    profileId: {type: DataTypes.UUID},
    operationId: {type: DataTypes.UUID}
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};