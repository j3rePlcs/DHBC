var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

//creacion de usuario
router.get("/crear",userController.crear)
router.post("/crear", userController.guardar)

//lectura de usuario
router.get("/", userController.listado)

//detalle de usuario
router.get("/:id", userController.detalle)

//actualizacion de usuario
router.get("/editar/:id", userController.editar)
router.post("/editar/:id", userController.actualizar)


module.exports = router;