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

    create: function (req, res) {
        let createdUser = {
            userName: req.body.username,
            email: req.body.email,
            passwordUser: req.body.password
        };

        db.User.create(createdUser)
            .then(() => {
                res.redirect("/turnos");
            })
            .catch(err => {
                console.log(err);
                res.redirect("/");
            });
    },

    edit: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (User) {
                res.render("editarUser")
            })


    }
}
module.exports = userController