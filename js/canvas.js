const canvas = document.getElementById('tablero');
const contexto = canvas.getContext('2d');
contexto.fillStyle = "#FFF"; // Color blanco
contexto.fillRect(0, 0, canvas.width, canvas.height);

class Ficha {
  constructor(r, c) {
    this.idJugador;
    this.radio = r;
    this.color = c;
    this.x = 200;
    this.y = 200;
    this.seleccionada = false;

    canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
    canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
    canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
  }

  dibujar(contexto) {
    contexto.beginPath();
    contexto.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    
    // Utiliza un fondo de imagen cuando la ficha está seleccionada
    const imagenFondo = new Image();
    imagenFondo.src = "imgEntr2/clasicos/4enlinea.jpg"; // Reemplaza con la ruta de tu imagen  
    imagenFondo.onload = function () {
      const patron = contexto.createPattern(imagenFondo, "no-repeat");
      contexto.fillStyle = patron;
      contexto.fill();
      
    };
    contexto.closePath();
      

    
  }

  manejarMouseDown(event) {
    // Verifica si se hizo clic en la ficha
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const distanciaAlCentro = Math.sqrt(
      Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
    );

    if (distanciaAlCentro <= this.radio) {
      this.seleccionada = true;
      
    }
  }

  manejarMouseMove(event) {
    if (this.seleccionada) {
      contexto.clearRect(0, 0, canvas.width, canvas.height);
      contexto.fillStyle = "#FFF"; // Restaurar el fondo blanco
      contexto.fillRect(0, 0, canvas.width, canvas.height);
      // Actualiza la posición de la ficha al seguir el movimiento del mouse
      const rect = canvas.getBoundingClientRect();
      this.x = event.clientX - rect.left;
      this.y = event.clientY - rect.top;
      this.dibujar(contexto);
    }
  }

  manejarMouseUp() {
    this.seleccionada = false;

  }
}

class Celda {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.ficha=null;
    this.contieneFicha = false;


    canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
    canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
    canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
  }

  dibujar(contexto) {
    // Dibuja la celda en el contexto del canvas
    contexto.fillStyle = this.contieneFicha ? "#00F" : "#FFF"; // Color azul si contiene una ficha, blanco si no
    contexto.fillRect(this.x, this.y, this.ancho, this.alto);
   
  }

  // Implementa una función para verificar si las coordenadas (x, y) están dentro de la celda
  contienePunto(x, y) {
    return x >= this.x && x <= this.x + this.ancho && y >= this.y && y <= this.y + this.alto;
  }

  manejarMouseDown() {
    this.dibujar(contexto);
  }

  manejarMouseMove(event) {
    this.dibujar(contexto);
  }

  manejarMouseUp(event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
  
    // Itera sobre todas las celdas y verifica si el punto de soltar el mouse está dentro de alguna celda
    for (let i = 0; i < arrayCeldas.length; i++) {
      const celda = arrayCeldas[i];
      if (celda.contienePunto(x, y)) {
        //preguntar si es valido
        // La ficha se soltó sobre esta celda

        if (!celda.contieneFicha) {
          // Coloca la ficha en la celda si la celda está vacía
          celda.contieneFicha = true;
          celda.ficha=ficha;
          ficha.dibujar(contexto);
          celda.dibujar(contexto);
          // Aquí puedes realizar acciones adicionales, como dibujar la ficha en la celda
          // o registrar que la celda ahora contiene la ficha
          // Luego, puedes volver a dibujar todo el canvas para reflejar los cambios
          
        }
        // Si encontraste una celda donde se soltó la ficha, puedes salir del bucle
      break;
        
    }
  }
}
}

class CeldaTablero {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.ficha=null;
    this.contieneFicha = false;
  }


}



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


let arrayCeldas = [];
let aux=400;
let aux2=400;
for (let i = 0; i < 5; i++) {
  let nuevaCelda = new Celda(aux, aux2, 100, 100);
  arrayCeldas.push(nuevaCelda);
  aux+=100;
}

for (let i = 0; i < arrayCeldas.length; i++) {
  arrayCeldas[i].dibujar(contexto);
}


ficha.dibujar(contexto);

//dibujarTablero();