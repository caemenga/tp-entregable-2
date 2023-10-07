let perfil = document.querySelector('.contenedorPerfil');
perfil.addEventListener('click', desplegarPerfil);

function desplegarPerfil(){
    let menu = document.querySelector('.desplegablePerfil');
    menu.classList.toggle('showPerfil')
}