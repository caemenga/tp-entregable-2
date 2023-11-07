
// class Celda {
//   constructor(x, y, ancho, alto, radioCirculo) {
//     this.x = x;
//     this.y = y;
//     this.ancho = ancho;
//     this.alto = alto;
//     this.radioCirculo = radioCirculo;
//     this.ficha=null;
//     this.contieneFicha = false;


    
//     canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
//   }

//   dibujar(columna,fila, contexto) {
    
//     // Dibuja la celda en el contexto del canvas
//     contexto.fillStyle = "#FFFFFF"; // Color de celda blanca
//     contexto.fillRect(this.x, this.y, this.ancho, this.alto);
//     // Dibuja un borde para resaltar las celdas
//     contexto.strokeStyle = "#000000";
//     contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
//     // Dibuja un círculo en la celda (por ejemplo, en la fila 2, columna 3)
     
//     contexto.beginPath();
//     contexto.arc(
//       this.x + this.ancho / 2,
//       this.y + this.alto / 2,
//       this.radioCirculo,
//       0,
//       2 * Math.PI
//     );
//     contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
//     contexto.stroke();
//     contexto.closePath();
   
//   }

//   manejarMouseUp(event) {
//     const x = event.clientX - canvas.getBoundingClientRect().left;
//     const y = event.clientY - canvas.getBoundingClientRect().top;
    
//     // Itera sobre todas las celdas y verifica si el punto de soltar el mouse está dentro de alguna celda
//     // for (let i = 0; i < tablero.length; i++) {
//       //   const celda = tablero[0][i];
//       if (this.contienePunto(x, y)) {
//         //preguntar si es valido
//         // La ficha se soltó sobre esta celda
        
        
//           let fichaAux=buscarFicha(x,y);
          
//           if(tablero.ubicarFicha(x,y,fichaAux)==false){
//             console.log("no hay lugar");
//           };
          
//           tablero.dibujar(contexto);
//           // fichaAux.dibujar(contexto);
//           // this.dibujar(contexto);
//           // Aquí puedes realizar acciones adicionales, como dibujar la ficha en la celda
//           // o registrar que la celda ahora contiene la ficha
//           // Luego, puedes volver a dibujar todo el canvas para reflejar los cambios
          
        
      
        
//     }
//   }
//   contienePunto(x, y) {
//        return (((x >= this.x) && (x <= (this.x + this.ancho))) && ((y >= this.y) && (y <= (this.y + this.alto))));
//   }
// }