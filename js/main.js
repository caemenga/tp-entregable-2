"use strict"

let contenedoresPrincipales = document.querySelectorAll('.contenedorPrincipal');


let posiciones = {};


document.querySelectorAll('.arrowRigth').forEach(function (arrowRigth, index) {
  let  arrowLeft = document.querySelectorAll('.arrowLeft')[index];
  


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


