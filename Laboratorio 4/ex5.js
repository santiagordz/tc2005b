const num5 = parseInt(window.prompt('Ej5. Ingresa un número'))

let num5r = Number(String(num5).split('').reverse().join(''))

document.write(
    `
    Your original number: <strong>${num5}</strong><br>
    Your reversed number: <strong>${num5r}</strong>
    `
)