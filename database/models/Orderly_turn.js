module.exports = function (sequelize, DataTypes) {
    let name = "Order";
    let cols = {
        "id":{
            type:DataTypes.INTEGER,
            "primaryKey":true
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
    "tableName": "orderly_turn",
    "timestamps": true,
    "createdAt":"created_at",
    "updatedAt":"updated_at"
    };
    const Order = sequelize.define(name, cols, config);
    Order.associate = function (models){

        Order.belongsTo(models.User,{
            "as":"orderlyTurn",
            "foreignKey":"idUser"
        })

        Order.belongsTo(models.Operation_type,{
            "as":"Operation_type",
            "foreignKey":"idOperation_type"
        })
    }
;
    
return Order
}