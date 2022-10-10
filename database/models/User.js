module.exports = function (sequelize, DataTypes) {
    let name = "User";
    let cols = {
        "dateCreation": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "name": {
            "type": DataTypes.STRING(15),
            "allowNull": false
        },
        "email": {
            "type": DataTypes.STRING(45)
        },
        "passwordUser": {
            "type": DataTypes.STRING(45),
            "allowNull": false
        },
        "idStatusUser": {
            "type": DataTypes.INTEGER
        },
        "idOrdely_turns": {
            "type": DataTypes.INTEGER
        }
    };
    let config = {
        "tableName": "users",
        "timestamps": false
    };

    let User = sequelize.define(name, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.StatusUser, {
            "as": "status",
            "foreignKey": "idStatusUser"
        });

        User.belongsTo(models.Ordely_turns, {
            "as": "ordely_turns",
            "foreignKey": "idOrdely_turns"
        });
    };
    return User
}