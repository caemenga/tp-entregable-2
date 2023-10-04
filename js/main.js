"use strict"
let arrowRigth = document.querySelector('.arrowRigth');
let arrowLeft = document.querySelector('.arrowLeft');
let contenedorPrincipal = document.querySelector('.contenedorPrincipal');


arrowRigth.addEventListener('click', moverCarrusel);

function moverCarrusel(){
    contenedorPrincipal.classList.add('carruselClickRigth');

    arrowRigth.removeEventListener('click', moverCarrusel);
}



