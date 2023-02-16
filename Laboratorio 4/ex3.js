var arr3 = []
var size = parseInt(window.prompt('Tamaño del arreglo'))

for(var a=0; a<size; a++) 
{  
    arr3[a] = prompt('Enter array Element ' + (a+1));
}

const neg = []
const igual = []
const mayor = []

function contador(arr) {
    for (const element of arr){
        if (element < 0){
            neg.push(element)
        }
        else if(element == 0){
            igual.push(element)
        }
        else{
            mayor.push(element)
        }
    }
    var strF = 
    `
    Cantidad de números negativos: ${neg.length} <br>
    Cantidad de ceros: ${igual.length} <br>
    Cantidad de números mayores a cero: ${mayor.length} 
    `

    return strF;
}

document.write(
    `
    <p>${contador(arr3)}</p>
    `
)