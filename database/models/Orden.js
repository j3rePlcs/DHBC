module.exports = function (sequelize, DataTypes) {
    let name = "Order";
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
            "allowNull": true
        },
        "delete_at": {
            "type": DataTypes.DATE,
            "allowNull":true
        },
        "idOperation_type": {
            "type": DataTypes.INTEGER
        },
        "idUser": {
            "type": DataTypes.INTEGER
        }
    };
        let config = {
    "tableName": "orderly_turn",
    "timestamps": true,
    "createdAt":"created_at",
    "updatedAt":"updated_at",
    "deleteAt": "delete_at"
    };
    const Order = sequelize.define(name, cols, config);
    Order.associate = function (models){
        Order.belongsTo(models.User,{
            "as":"user",
            "foreignKey":"idUser"
        })

        Order.belongsTo(models.Operation_type,{
            "as":"operation_type",
            "foreignKey":"idOperation_type"           
        })
    }
    
return Order
}
