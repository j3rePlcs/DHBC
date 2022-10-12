//crud
const db = require("./../database/models");
// controlador de modelos
const userController = {
    list: function (req, res) {
        db.User.findAll({
            include:[{association:"orderly_turn"}]
        })
        .then(users=>{users.dataValues})
        .then(users=>{
            res.render("turns");
        })
    },

    create: function (req, res) {
        let created_at = new Date();
        let month = created_at.getMonth() + 1;
        created_at = created_at.getFullYear() + "-" + month + "-" + created_at.getDate();

        let createdUser = {
            userName: req.body.name,
            email: req.body.userEmail,
            passwordUser: req.body.passwordUser,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
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