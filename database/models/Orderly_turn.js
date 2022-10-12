module.exports = function (sequelize, DataTypes) {
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
        },
        "idUser": {
            "type": DataTypes.INTEGER
        }
    };
        let config = {
    "tableName": "orderly_turns",
    "timestamps": true
    };
    const Orderly_turn = sequelize.define(name, cols, config);
    Orderly_turn.associate = function ( models ){

        Orderly_turn.hasMany(models.User,{
            "as":"orderly_turn",
            "foreingKey":"idUser"
        })

        Orderly_turn.hasMany(models.Operation_type,{
            "as":"Operation_type",
            "foreingKey":"idOperation_type"
        })
    }
;
    
return Orderly_turn
}