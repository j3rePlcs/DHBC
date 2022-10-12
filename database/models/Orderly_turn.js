module.exports = function (sequelize, DataTypes) {
    const Orderly_turn = require("./Orderly_turn");
        let name = "Orderly_turn";
        let cols = {
            "id": {
                "type": DataTypes.INTEGER,
                "primaryKey": true,
                "autoIncrement": true
            },        
            "codeOrderly": {
                "type": DataTypes.STRING(45),
                "allowNull": false
            },
            "box": {
                "type": DataTypes.STRING(15),
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
            "delete_at": {
                "type": DataTypes.DATE,
                "allowNull": false
            },
            "idOperation_type": {
                "type": DataTypes.INTEGER
            }
        };
            let config = {
        "tableName": "orderly_turns",
        "timestamps": true
        };
        let Orderly_turn = sequelize.define(name, cols, config);
        User.belongsTo(models.Operation_type, {
            "as": "operation_type",
            "foreignKey": "idOperation_type"
        },
        Orderly_turn.hasMany(models.User, {
            "as": "orderly",
            "foreignKey": "idOrderly_turn"
        })
    )}