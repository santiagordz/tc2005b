const express = require("express");
const nuevaComidaController = require('../controllers/nuevaComida.controller')

const router = express.Router();

router.get('/', nuevaComidaController.listar)
module.exports = router;
