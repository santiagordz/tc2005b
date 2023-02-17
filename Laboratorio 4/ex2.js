const num_r1 = Math.floor(Math.random() * 100);
const num_r2 = Math.floor(Math.random() * 100);

const start = Date.now();
const sum2 = window.prompt(`Ej2. ${num_r1} + ${num_r2} = ...`);
const end = Date.now();

const time = (end - start)

let confirmar_suma = () => {
  if (num_r1 + num_r2 == sum2) {
    return "Muy bien, si sabes sumar !!";
  } else {
    return `<strong>Regresate al kinder mi chavo</strong>`;
  }
};

document.write(
  `
    <p>${confirmar_suma()}</p>
    <p>Te Tadraste: <strong>${time/1000}</strong> segundos</p>
    `
);
