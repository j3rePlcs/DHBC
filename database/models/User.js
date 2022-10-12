module.exports = function (sequelize, DataTypes) {
    let name = "Users";
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
        },
        "idOrdely_turn": {
            "type": DataTypes.INTEGER
        }
    }}