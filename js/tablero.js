class Tablero{
    constructor(maxFilas, maxColumn){
      this.tablero = [];
      this.maxFilas = maxFilas;
      this.maxColumn = maxColumn;
  
      canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
      canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
      canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
  
    }
    manejarMouseDown() {
      this.dibujar(contexto);
    }
  
    manejarMouseMove(event) {
      this.dibujar(contexto);
    }
  
    manejarMouseUp(event) {
      this.dibujar(contexto);
    }
    crearTablero(){
      for (let fila = 0; fila < 6; fila++) {
        
          this.tablero[fila] = [];
          for(let column = 0; column < 7; column++){
            if (fila == 0){
              let nuevaCelda = new Celda(aux, aux2, 100, 100);
              console.log(aux);
              this.tablero[fila][column] = nuevaCelda;
            }else{
              let nuevaCelda = new CeldaTablero(aux, aux2, 100, 100);
              this.tablero[fila][column] = nuevaCelda;
            }
            aux+=100;
          }
          aux=200;
          aux2+=100;
      }
  
    }
    dibujar(contexto){
      for (let fila = 0; fila < 6; fila++) {
          for(let column = 0; column < 7; column++){
              this.tablero[fila][column].dibujar(contexto);
          }
      }
    }
  }