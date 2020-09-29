module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'users',
      timestamps: false
    }
  )
}