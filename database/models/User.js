module.exports = function (sequelize, DataTypes) {
    let name = "User";
    let cols = {
        "userName": {
            "type": DataTypes.STRING(45),
            "allowNull": false
        },
        "email": {
            "type": DataTypes.STRING(45)
        },
        "passwordUser": {
            "type": DataTypes.STRING(45),
            "allowNull": false
        },
        "created_at": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "updated_at": {
            "type": DataTypes.DATE,
            "allowNull": false
        }
    };
    let config = {
        "tableName": "users",
        "timestamps": true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
    };
    const User = sequelize.define(name, cols, config);

    User.associate = function (models) {
       User.hasMany(models.Order, {
            "as": "order",
            "foreignKey": "idUser"
        });

    };

    return User
}
