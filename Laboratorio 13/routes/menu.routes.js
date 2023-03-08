const express = require("express");
const router = express.Router();
const comidaController = require("../controllers/comida.controller");

router.get("/", comidaController.listar);
router.get("/agregar", comidaController.getNuevaComida)
router.post("/agregar", comidaController.postNuevaComida)

module.exports = router;
