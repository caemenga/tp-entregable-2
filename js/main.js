"use strict"
let arrowRigth = document.querySelector('.arrowRigth');
let arrowLeft = document.querySelector('.arrowLeft');
let contenedorPrincipal = document.querySelector('.contenedorPrincipal');
let posicion = 0;

arrowRigth.addEventListener('click', moveRigth);


function moveRigth(){
    if(posicion>-53){
        posicion -= 27;
        contenedorPrincipal.style.transform = `translateX(${ posicion }%)`;
    }
}

arrowLeft.addEventListener('click', moveLeft);

function moveLeft(){
    if(posicion<-1){
        posicion += 27;
        contenedorPrincipal.style.transform = `translateX(${ posicion }%)`;
    }

}
