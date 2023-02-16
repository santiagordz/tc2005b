const num_r1 = Math.floor(Math.random() * 10)
const num_r2 = Math.floor(Math.random() * 10)

var time = new Date;
const time_before = time.getTime();
const sum2 = window.prompt(`${num_r1} + ${num_r2} = ...`)
const time_after = time.getTime();

let confirmar_suma = () => {
    if (num_r1 + num_r2 == sum2){
        return 'Muy bien, si sabes sumar !!'
    }
    else{
        return 'Regresate al kinder mi chavo'
    }
}

document.write(
    `
    <p>${confirmar_suma()}</p>
    <p>Te Tadraste:  segundos</p>
    `
)