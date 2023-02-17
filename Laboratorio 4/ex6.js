function Jugador(nombre, numeroCamiseta) {
  this.nombre = nombre;
  this.numeroCamiseta = numeroCamiseta;
  this.puntos = 0;
  this.rebotes = 0;
  this.asistencias = 0;

  // Método para anotar puntos
  this.anotar = function () {
    this.puntos += 1;
  };

  // Método para recuperar un rebote
  this.recuperarRebote = function () {
    this.rebotes++;
  };

  // Método para pasar la pelota a un compañero de equipo
  this.pasarPelota = function () {
    this.asistencias++;
  };
}

// Creamos un objeto de la clase Jugador
var jugador1 = new Jugador("Michael Jordan", 23);

// Modificamos el DOM

const botonCanasta = document.getElementById("btn-canasta");
const botonAsistencia = document.getElementById("btn-asistencia");
const botonRebote = document.getElementById("btn-rebote");

const spanPuntos = document.getElementById("puntos");
const spanAsistencias = document.getElementById("asistencias");
const spanRebotes = document.getElementById("rebotes");

botonCanasta.addEventListener("click", () => {
  jugador1.anotar();
  spanPuntos.innerHTML = jugador1.puntos;
});

botonAsistencia.addEventListener("click", () => {
  jugador1.pasarPelota();
  spanAsistencias.innerHTML = jugador1.asistencias;
});
botonRebote.addEventListener("click", () => {
  jugador1.recuperarRebote();
  spanRebotes.innerHTML = jugador1.rebotes;
});

const botonEndGame = document.getElementById("end-game");
const spanEnd = document.getElementById("the-end");
botonEndGame.addEventListener("click", () => {
  spanEnd.style.display = "Block";
  const spanEndScore = document.getElementById("end-score");
  spanEndScore.innerHTML += `Puntos: ${jugador1.puntos}<br> Asistencias: ${jugador1.asistencias}<br> Rebotes: ${jugador1.rebotes}`;
});
