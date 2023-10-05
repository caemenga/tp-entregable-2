"uses strict"
let menuHamburguesa = document.querySelector('.menuHamburguesa');
let menuCategorias =document.querySelector('.menuCategorias');

let catTranslateXInicial = getComputedStyle(menuCategorias).transform;



menuHamburguesa.addEventListener('click',desplegarCat);
menuCategorias.addEventListener('mouseover', mostrarMenu);
document.addEventListener('click', cerrarMenu);

function desplegarCat(){
    let catTranslateX = getComputedStyle(menuCategorias).transform;
    console.log(catTranslateX);
    if(catTranslateX === catTranslateXInicial){
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