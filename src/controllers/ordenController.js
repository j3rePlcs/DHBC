let db = require("./../../database/models");

let ordenController = {
    crear: function (req,res){
     db.Operation_type.findAll()
     .then(function(operation_type){
        return res.render("creacionTurnos", {operation_type:operation_type});
     })
    },
    guardar: function(req,res){
        db.Order.create({
            // id:req.body.id,
            codeOrderly: req.body.codigo,
            box:req.body.caja,
            created_at:req.body.creacion,
            idOperation_type:req.body.operacion,
            idUser:req.body.usuario
        })
        res.redirect("/orden");
    },