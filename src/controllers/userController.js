let db = require("../database/models");

let userController = {
    crear: function (req,res){
     db.User.findAll()
     .then(function(user){
        return res.render("creacionUsuario", {user:user});
     })
    },
    guardar: function(req,res){
        db.User.create({
            id:req.body.codigo,
            userName: req.body.nombre,
            email:req.body.email,
            passwordUser:req.body.contraseña,
            created_at:req.body.creacion
        })
        res.redirect("/users");
    },
    listado: function(req,res){
        db.User.findAll()
        .then(function(user){
            res.render("listadoUsuario", {user:user})
        })
    },
    detalle: function(req,res){
        db.User.findByPk(req.params.id, {
            include:[{association:"order"}]
        })
        .then(function(user){
            res.render("detalleUsuario", {user:user})
        })
    },

    edit: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (User) {
                res.render("editarUser")
            })


    }
}
module.exports = userController