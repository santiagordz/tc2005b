function rand() {
  return Math.floor(Math.random() * 10);
}

let matriz = [];

let promedios = () => {
  let suma = 0;
  matriz = [
    [rand(), rand(), rand()],
    [rand(), rand(), rand()],
    [rand(), rand(), rand()],
  ];

  document.write(`<strong>Matriz Original: <br><br>${matriz[0]} <br> ${matriz[1]} <br> ${matriz[2]}<br><br></strong>`);

  for (let index = 0; index < matriz.length; index++) {
    let row = matriz[index];
    for (let index = 0; index < row.length; index++) {
      suma += row[index];
    }
    suma = (suma/matriz.length);
    suma = suma.toFixed(2)
    document.write(
      `<p style="margin:0;"> Promedio de suma de fila ${index + 1}: ${suma}</p>`
    );
    suma = 0;
  }
};

promedios()