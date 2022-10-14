let db = require("./../../database/models");

let ordenController = {
    crear: function (req,res){
     db.Operation_type.findAll()
     .then(function(operation_type){
        return res.render("creacionTurnos", {operation_type:operation_type});
     })
    }