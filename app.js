// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // Eliminamos espacios

  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("Ese nombre ya fue añadido.");
    return;
  }

  // Agregamos a la lista y al HTML
  listaAmigos.push(nombre);

  const listaHTML = document.getElementById("listaAmigos");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre;
  listaHTML.appendChild(nuevoItem);

  input.value = ""; // Limpiar el input
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  if (listaAmigos.length < 2) {
    alert("Agrega al menos dos nombres para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * listaAmigos.length);
  const nombreSorteado = listaAmigos[indice];

  const liResultado = document.createElement("li");
  liResultado.textContent = `🎉 El amigo sorteado es: ${nombreSorteado}`;
  resultado.appendChild(liResultado);
}