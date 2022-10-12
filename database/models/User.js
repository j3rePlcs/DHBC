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
        "timestamps": true
    };

    const User = sequelize.define(name, cols, config)
    User.associate = function(models){
        User.belongsTo(models.Orderly_turn, {
            "as": "orderly_turn",
            "foreignKey": "idUser"
        });
    }
    };
    return User