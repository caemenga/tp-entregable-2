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