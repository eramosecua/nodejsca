module.exports = (sequelize, DataTypes) => {
    const Lecturer = sequelize.define(
        "lecturers",
        {
           lecturerName: DataTypes.STRING
        },
        {
            tableName: "lecturers",
            timetamps: false
        }
    );

    Lecturer.associate = (models) => {
        Lecturer.hasOne(models.courses, {
            foreignKey: "lecturerId",
            as: "courses"
        });
    };

    return Lecturer;
};