const canvas = document.getElementById('tablero');
const contexto = canvas.getContext('2d');
contexto.fillStyle = "#FFF"; // Color blanco
contexto.fillRect(0, 0, canvas.width, canvas.height);
let aux = 200;
let aux2 = 100;






//En este ejemplo, estamos utilizando el método contienePunto(x, y) para verificar si un punto (las coordenadas donde se soltó el mouse) se encuentra dentro de una celda. Si es así, podemos realizar acciones adicionales, como colocar la ficha en la celda y dibujar el tablero actualizado.

//Asegúrate de adaptar este código a tu aplicación y a la estructura de tu juego, pero esto te proporciona un punto de partida para detectar si la ficha se soltó sobre una celda específica.



/*function dibujarTablero() {
  // Limpia el canvas
  contexto.clearRect(0, 0, canvas.width, canvas.height);
      contexto.fillStyle = "#FFF"; // Restaurar el fondo blanco
      contexto.fillRect(0, 0, canvas.width, canvas.height);

  
    ficha.dibujar(contexto);
    celda.dibujar(contexto);
  
  

  // Otros elementos de dibujo, si los tienes

  // Luego puedes llamar a esta función nuevamente en el siguiente fotograma
  requestAnimationFrame(dibujarTablero);
}*/





let ficha = new Ficha(50, 'green');


ficha.dibujar(contexto);

//dibujarTablero();

let tablero = new Tablero(6,7);
tablero.crearTablero();
tablero.dibujar(contexto);