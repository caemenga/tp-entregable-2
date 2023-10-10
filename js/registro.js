document.addEventListener('DOMContentLoaded', function() {
    let btnRegistro = document.querySelector('#btnRegistro');
 
    btnRegistro.addEventListener('click', function(){
       let mensajeOk = document.getElementById('contenedorOk');
       let registro = document.getElementById('main-registro');
       console.log(mensajeOk);
 
       mensajeOk.classList.toggle('contenedorOKclick');
       registro.classList.toggle('registroOk');
       setTimeout(function() {
        window.location.href = 'login.html';
    }, 5000)
    });
});
