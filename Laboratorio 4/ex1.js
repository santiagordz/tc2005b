const num1 = parseInt(window.prompt("Ej1. Ingresa un número"));
const arr1 = [];

for (let index = 1; index < num1 + 1; index++) {
  arr1.push(index);
}

const strArr = [];
for (let i = 0; i < arr1.length; i++) {
  let string = `<tr>
        <td>${arr1[i]}</td>
        <td>${arr1[i] ** 2}</td>
        <td>${arr1[i] ** 3}</td>
    </tr>`;
  strArr.push(string);
}

const table1 = document.write(
  `<table class="tg">
    <caption>Cuadrados y Cubos</caption>
    <thead>
        <tr>
            <th>Numero</th>
            <th>Cuadrado</th>
            <th>Cubo</th>
        </tr>
    </thead>
    <tbody>
        ${strArr.toString()}
    </tbody>
   </table>`
);
