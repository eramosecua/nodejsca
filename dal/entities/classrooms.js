module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define(
        "classrooms",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoincrement: true
              },
              className: DataTypes.STRING
        },
        {
            tableName: "classrooms",
            timetamps: false
        }
    );

    Classroom.associate = (models) => {
        Classroom.hasMany(models.users, {
            foreignKey: "classroomId",
            as: "users"
        });
    };

    return Classroom;
};