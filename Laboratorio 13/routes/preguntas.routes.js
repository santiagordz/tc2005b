const express = require("express");
const router = express.Router();
const preguntasController = require("../controllers/preguntas.controller");

router.get("/", preguntasController.listar);

module.exports = router;
