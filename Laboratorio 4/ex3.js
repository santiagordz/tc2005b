function rand() {
  return Math.floor(Math.random() * 10);
}
const numPool = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

var arr3 = [];
var size = rand()+1;

for (var i = 0; i < size; i++) {
  arr3.push(numPool[rand()]);
}

const neg = [];
const igual = [];
const mayor = [];

function contador(arr) {
  for (const element of arr) {
    if (element < 0) {
      neg.push(element);
    } else if (element == 0) {
      igual.push(element);
    } else {
      mayor.push(element);
    }
  }
  var strF = `
    <strong>Arreglo Random: [${arr3}] <br><br></strong> 
    Cantidad de números negativos: ${neg.length} <br>
    Cantidad de ceros: ${igual.length} <br>
    Cantidad de números mayores a cero: ${mayor.length} 
    `;

  return strF;
}

document.write(
  `
    <p>${contador(arr3)}</p>
    `
);
