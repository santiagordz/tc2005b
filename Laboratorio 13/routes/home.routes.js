const express = require("express");
const router = express.Router();
const nuevaComidaController = require('../controllers/nuevaComida.controller')

router.get("/", nuevaComidaController.listar)

module.exports = router;
