var express = require('express');
var router = express.Router();
var ordenController =require("./../src/controllers/ordenController")

//creacion
router.get("/crear", ordenController.crear)
router.post("/crear", ordenController.guardar)

//lectura
router.get("/", ordenController.listado)

//detalle
router.get("/:id", ordenController.detalle)

//actualizacion
router.get("/editar/:id", ordenController.editar)
router.post("/editar/:id", ordenController.actualizar)

//borrar
router.post("/borrar/:id", ordenController.borrar)

module.exports = router;