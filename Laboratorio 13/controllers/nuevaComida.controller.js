const { name } = require("ejs");
const Comida = require("../models/comida.model");

exports.listar = ((req, res, next) => {
    res.render('home', {comida: Comida.fetchAll()})
})

exports.getNuevaComida = (req, res, next) => {
  res.write("write");
};
