// class CeldaTablero {
//   constructor(x, y, ancho, alto, radioCirculo) {
//     this.x = x;
//     this.y = y;
//     this.ancho = ancho;
//     this.alto = alto;
//     this.radioCirculo = radioCirculo;
//     this.ficha=null;
//     this.contieneFicha = false;


//     // canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
//     // canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
//     // canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
//   }

//   dibujar(columna, fila, contexto){
//     if(this.ficha==null){
//       contexto.fillStyle = "#500487"; // Color de celda blanca
//       contexto.fillRect(this.x, this.y, this.ancho, this.alto);
    
//       // Dibuja un borde para resaltar las celdas
//       contexto.strokeStyle = "#000000";
//       contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
//       // Dibuja un círculo en la celda (por ejemplo, en la fila 2, columna 3)
      
//       contexto.beginPath();
//       contexto.arc(
//         this.x + this.ancho / 2,
//         this.y + this.alto / 2,
//         this.radioCirculo,
//         0,
//         2 * Math.PI
//       );
      
//       contexto.fillStyle = "#ffffff"; // Cambia el color del relleno del círculo a blanco
//       contexto.fill();
    
//       contexto.strokeStyle = "#00000"; // Cambia el color del trazo del círculo a blanco
//       contexto.stroke();
      
//       contexto.closePath();
//     }
//     else{
//       this.ficha.dibujar();
//     }
//   }
// }