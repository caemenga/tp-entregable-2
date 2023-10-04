"use strict"
// Selecciona todos los elementos con la clase "contenedorPrincipal"
const contenedoresPrincipales = document.querySelectorAll('.contenedorPrincipal');

// Inicializa un objeto para almacenar las posiciones individuales de los contenedores
const posiciones = {};

// Agrega eventos a los botones de flecha
document.querySelectorAll('.arrowRigth').forEach(function (arrowRigth, index) {
  const arrowLeft = document.querySelectorAll('.arrowLeft')[index];
  const contenedorPrincipal = contenedoresPrincipales[index];
  posiciones[index] = 0;

  arrowRigth.addEventListener('click', function () {
    moveRigth(index);
  });

  arrowLeft.addEventListener('click', function () {
    moveLeft(index);
  });
});

function moveRigth(index) {
  if (posiciones[index] > -53) {
    posiciones[index] -= 27;
    contenedoresPrincipales[index].style.transform = `translateX(${posiciones[index]}%)`;
  }
}

function moveLeft(index) {
  if (posiciones[index] < -1) {
    posiciones[index] += 27;
    contenedoresPrincipales[index].style.transform = `translateX(${posiciones[index]}%)`;
  }
}
