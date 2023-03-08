const Comida = require("../models/comida.model");

exports.listar = (req, res, next) => {
  res.render("menu", { comidas: Comida.fetchAll() });
};

exports.getNuevaComida = (req, res, next) => {
  res.render("nueva");
};

exports.postNuevaComida = (req, res, next) => {
  const comida = new Comida({
    nombre: req.body.nombre,
    calorias: req.body.calorias,
    precio: req.body.precio,
  });

  comida.save();

  res.redirect('/')

};
