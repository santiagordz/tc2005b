const Preguntas = require("../models/preguntas.model");

exports.listar = (req, res, next) => {
  res.render("preguntas", { preguntas: Preguntas.fetchAll() });
};
