class CeldaTablero {
    constructor(x, y, ancho, alto) {
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.ficha=null;
      this.contieneFicha = false;
  
  
      // canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
      // canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
      // canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
    }
  
    dibujar(contexto){
      contexto.fillStyle = this.contieneFicha ? "#00F" : "#FFF"; // Color azul si contiene una ficha, blanco si no
      contexto.fillRect(this.x, this.y, this.ancho, this.alto);
      contexto.strokeStyle = "#000";
      contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
    }
  
  
  }