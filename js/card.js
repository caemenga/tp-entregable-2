let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function(){
        window.location.href = 'paginaJuego.html';
    })
    
});