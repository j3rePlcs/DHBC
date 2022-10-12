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
            }}}