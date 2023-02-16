const arr4 = []
var size4 = parseInt(window.prompt("Ej4. Tamaño del arreglo"));

for (var a = 0; a < size4; a++) {
    arr4[a] = parseInt(prompt("Enter array Element " + (a + 1)));
}

function promedio(arr){
    var suma = 0
    for (const element of arr) {
        suma += element;
    }
    var promedio = suma / arr.length
    return promedio
}

document.write(
    `
    <p>El promedio de los números de tu arreglo es: <storng>${promedio(arr4)}</storng></p>
    `
)