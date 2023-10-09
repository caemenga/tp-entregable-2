let btnRegistro = document.querySelector('#btnRegistro');

btnRegistro.addEventListener('click', function(){
    let textoError = document.querySelectorAll('#error');
    let inputs = document.querySelectorAll('#inputR');
    console.log(inputs);
    for (let index = 0; index < textoError.length; index++) {
        textoError[index].classList.toggle('errorShow');
    }
    debugger;
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].classList.toggle('inputError');
        
    }
})