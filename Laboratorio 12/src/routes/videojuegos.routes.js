const express = require("express");
const path = require("path");
const router = express.Router();
const filesystem = require("fs");

router.get("/destiny2", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "videojuegos", "destiny2.html")
  );
});

router.get("/minecraft", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "..", "views", "videojuegos", "minecraft.html")
    );
  });

  router.get("/r6", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "..", "views", "videojuegos", "r6.html")
    );
  });

router.post("/destiny2", (req, res, next) => {
  res.send(`Tu jugador favorito es: ${req.body.jugador}`)
  filesystem.writeFileSync("/out/output.txt", req.body.jugador)
});

module.exports = router;
