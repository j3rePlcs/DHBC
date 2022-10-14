var express = require('express');
var router = express.Router();
var ordenController =require("./../src/controllers/ordenController")

//creacion
router.get("/crear", ordenController.crear)
router.post("/crear", ordenController.guardar)

//lectura
router.get("/", ordenController.listado)