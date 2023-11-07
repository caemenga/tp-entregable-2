// class Tablero{
//   constructor(maxFilas, maxColumn, altoCelda, anchoCelda, radioCirculo){
//     this.tablero = [];
//     this.maxFilas = maxFilas;
//     this.maxColumn = maxColumn;
//     this.altoCelda = altoCelda;
//     this.anchoCelda = anchoCelda;
//     this.radioCirculo = radioCirculo;
//     canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
//     canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
//     canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));

//   }
//     manejarMouseDown() {
//       this.dibujar(contexto);
//     }
  
//     manejarMouseMove(event) {
//       this.dibujar(contexto);
//     }
  
//     manejarMouseUp(event) {
      
//       const x = event.clientX - canvas.getBoundingClientRect().left;
//       const y = event.clientY - canvas.getBoundingClientRect().top;
//        // Itera sobre todas las celdas y verifica si el punto de soltar el mouse está dentro de alguna celda
//        for (let i = 0; i < this.tablero.length; i++) {
//         const celda = this.tablero[0][i];
//         if(celda.contienePunto(x,y)){
          
//         }
//     }
//   }


//   crearTablero() {
//     const totalAnchoTablero = this.maxColumn * this.anchoCelda;
//     const totalAltoTablero = this.maxFilas * this.altoCelda;

//     const xInicial = (canvas.width - totalAnchoTablero) / 2;
//     const yInicial = (canvas.height - totalAltoTablero) / 2;

//     for (let fila = 0; fila < this.maxFilas; fila++) {
//       this.tablero[fila] = [];
//       for (let column = 0; column < this.maxColumn; column++) {
//         let x = xInicial + column * this.anchoCelda;
//         let y = yInicial + fila * this.altoCelda;
//         if (fila === 0) {
//           let nuevaCelda = new Celda(x, y, this.anchoCelda, this.altoCelda, this.radioCirculo);
//           this.tablero[fila][column] = nuevaCelda;
//         } else {
//           let nuevaCelda = new CeldaTablero(x, y, this.anchoCelda, this.altoCelda, this.radioCirculo);
//           this.tablero[fila][column] = nuevaCelda;
//         }
//       }
//     }
//   }
//     dibujar(contexto){
//       contexto.clearRect(0, 0, canvas.width, canvas.height);
//       for (let fila = 0; fila < 6; fila++) {
//           for(let column = 0; column < 7; column++){

//               this.tablero[fila][column].dibujar(contexto);

//             }
//           }
//       }
    

//     ubicarFicha(x,y,fichaN){
//       let c = this.getColumna(x,y);
//       let b = false;
//       for (let fila = 5; fila > 0; fila--){
//         console.log(fila);
//         console.log(c);
//         if(this.tablero[fila][c].ficha==null){
          
//           fichaN.x=this.tablero[fila][c].x+fichaN.radio;
//           fichaN.y=this.tablero[fila][c].y+fichaN.radio;
//           this.tablero[fila][c].ficha=fichaN;
//           this.tablero[fila][c].contieneFicha=true;
//           b=true;
          
          
//           // fichaN.setXYInicial();
//           break;
//         }
//       }
//       return b;
//     }

//     getColumna(x,y){
//       for (let i = 0; i <= this.tablero.length; i++) {
//         let celda = this.tablero[0][i];
        
//         if(celda.contienePunto(x,y)){
//           return i;
            
//         }
//       }
//       return -1;
//     }
//     gano(f,c){
      
//     }
//     sumaIzquierda(f,c){
//       let suma=1;
      
//        if(this.tablero[f][c--].idJugador = this.tablero[f][c].idJugador){
//           suma++;
//        }
      
//       return suma;
//     }
//     }
    
  