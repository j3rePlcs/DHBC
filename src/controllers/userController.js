//crud
const db = require("./../../database/models");
// controlador de modelos
const userController = {

    list: function (req, res) {
        db.User.findAll({
            include:[{association:"orderlyTurn"}]
        })
        .then(users=>{users.dataValues})
        .then(users=>{
            res.render("turns",{users});
        })
    },
    createView:function(req, res) {
        res.render("register")
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