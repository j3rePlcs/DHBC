module.exports = function (sequelize, DataTypes) {
    let name = "Operation_type"
    let cols = {
        "nameOperation": {
            "type": DataTypes.STRING(10),
            "allowNull": false
        }
    };
    let config = {
        "tableName": "operation_type",
        "timestamps": false
    };
    const Operation_type = sequelize.define(name, cols, config);

    Operation_type.associate = function (models) {

        Operation.hasMany(models.Product, {
            "as": "operation_type",
            "foreignKey": "idOperation_type"
        });

    };

    return Operation_type
}