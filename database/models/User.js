module.exports = function (sequelize, DataTypes) {
    let name = "User";
    let cols = {
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
        "created_at": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "updated_at": {
            "type": DataTypes.DATE,
            "allowNull": false
        },
        "idStatusUser": {
            "type": DataTypes.INTEGER
        },
        "idOrdely_turn": {
            "type": DataTypes.INTEGER
        }
    };
    let config = {
        "tableName": "users",
        "timestamps": true
    };

    let User = sequelize.define(name, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.StatusUser, {
            "as": "status",
            "foreignKey": "idStatusUser"
        });

        User.belongsTo(models.Orderly_turn, {
            "as": "orderly_turn",
            "foreignKey": "idOrdely_turns"
        });
    };
    return User
}