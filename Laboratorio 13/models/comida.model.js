const comida = [
  {
    nombre: "Pizza",
    calorias: "550",
    precio: 240,
    imagen:
      "https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
  },
  {
    nombre: "Hamburguesa",
    calorias: "750",
    precio: 320,
    imagen:
      "https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg",
  },
];

module.exports = class Comida {
  constructor(comida) {
    this.nombre = comida.nombre || "Tacos de Ojo";
    this.calorias = comida.calorias || "1000";
    this.precio = comida.precio || "25";
    this.imagen = comida.imagen || "/";
  }

  save() {
    comida.push(this);
  }

  static fetchAll() {
    return comida;
  }
};
