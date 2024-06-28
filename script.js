let intentos = 6;
let diccionario = ["APPLE", "HURLS", "WINGS", "YOUTH", "HOUSE", "TRAIN"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let verde = "#9BEC00";
let amarillo = "#FFF455";
let gris = "#EEEDEB";

const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
button.addEventListener("click", intentar);

function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    mostrarGrillaCompleta(palabra);
    terminar("<h1>GANASTE! 🎉</h1>");
    return;
  }
  const row = document.createElement("div");
  row.className = "row";
  const grid = document.getElementById("grid");
  for (const i in INTENTO) {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = INTENTO[i];
    if (INTENTO[i] === palabra[i]) {
      span.style.backgroundColor = verde;
    } else if (palabra.includes(INTENTO[i])) {
      span.style.backgroundColor = amarillo;
    } else {
      span.style.backgroundColor = gris;
    }
    row.appendChild(span);
  }
  grid.appendChild(row);
  intentos--;

  if (intentos == 0) {
    terminar("<h1>PERDISTE! 😢</h1>");
  }
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}

function mostrarGrillaCompleta(palabraCorrecta) {
  const grid = document.getElementById("grid");
  const row = document.createElement("div");
  row.className = "row";

  for (let i = 0; i < palabraCorrecta.length; i++) {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = palabraCorrecta[i];
    span.style.backgroundColor = verde;
    row.appendChild(span);
  }

  grid.appendChild(row);
}
