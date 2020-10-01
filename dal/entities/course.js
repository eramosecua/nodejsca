module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define(
    'courses',
    {
      lectureId: DataTypes.INTEGER,
      courseName: DataTypes.STRING
    },
    {
      tableName: 'courses',
      timestamps: false
    }
  );

  UserCourse.associate = function(models) {};
  
  return UserCourse;
}