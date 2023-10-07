let perfil = document.querySelector('.contenedorPerfil');
perfil.addEventListener('click', desplegarPerfil);

function desplegarPerfil(){
    let menu = document.querySelector('.menuUsuario');
    menu.classList.toggle('showPerfil');
}