"uses strict"
let menuHamburguesa = document.querySelector('.menuHamburguesa');
let menuCategorias =document.querySelector('.menuCategorias');




menuHamburguesa.addEventListener('click',desplegarCat);
menuCategorias.addEventListener('mouseover', mostrarMenu);
document.addEventListener('click', cerrarMenu);

function desplegarCat(){
    let catTranslateX = getComputedStyle(menuCategorias).transform;
    console.log(catTranslateX);
    if(catTranslateX !== 'matrix(1, 0, 0, 1, 0, 0)'){
        menuCategorias.style.transform = 'translateX(0%)';
    }
    else{
        menuCategorias.style.transform = 'translateX(-200%)';
    }
}

function mostrarMenu(){
    let catDesplegadas = document.querySelector('.catDesplegadas');
    
        catDesplegadas.style.display = 'block';
}

function cerrarMenu(){
    let catDesplegadas = document.querySelector('.catDesplegadas');
    catDesplegadas.style.display = 'none';
}