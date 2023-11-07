// class Ficha {
//   constructor(x, y, r, c, contexto, imagenSrc, ancho) {
//     this.idJugador;
//     this.radio = r;
//     this.color = c;
//     this.x = x;
//     this.y = y;
//     this.ancho = ancho;
//     this.contexto = contexto
//     this.seleccionada = false;

//     this.imagen = new Image();
//     this.imagen.src = imagenSrc;
//     this.imagen.onload = () => {
//       this.dibujar();
//     }

//     canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
//     canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
//     canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
//   }

 

//   dibujar() {
//     console.log("entro a dibujar() en Ficha");
//     this.contexto.beginPath();
//     this.contexto.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);    
//     // ancho y alto de la imagen
//     let anchoimagen = this.imagen.width;
//     let altoimagen = this.imagen.height;

//     //para que no se rompa la imagen
//     let aspecto = anchoimagen / altoimagen;

//     let ancho = this.radio *1.5; // Cambia el ancho según tus necesidades
//     let altura = ancho / aspecto;
//     const patron = this.contexto.createPattern(this.imagen, "no-repeat");
//       this.contexto.fillStyle = patron;

//     //dibuja
//     this.contexto.drawImage(this.imagen, this.x - ancho / 2, this.y - altura / 2, ancho, altura);
      

    
//   }

//   dibujarApilado(){
//     console.log(this.imagenCargada);
//     this.contexto.beginPath();
//     this.contexto.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    
  
//       // Si la imagen está cargada, utiliza la imagen como patrón
//       // const patron = this.contexto.createPattern(this.imagen, "no-repeat");
//       // contexto.fillStyle = patron;

//       // Si la imagen no está cargada, utiliza un color de relleno predeterminado
//       // contexto.fillStyle = "#FF0000"; // Color del círculo (rojo en este caso
//     this.contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
//     this.contexto.stroke();
//     this.contexto.shadowBlur = 5;
//     this.contexto.shadowColor = "rgba(0, 0, 0, 0.8)";
//     this.contexto.fill();

//       // Restablece las sombras para futuros dibujos
//     this.contexto.shadowBlur = 0;
//     this.contexto.closePath();
      

//   }
  
//   manejarMouseDown(event) {
//     // Verifica si se hizo clic en la ficha
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;

//     const distanciaAlCentro = Math.sqrt(
//       Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
//     );

//     if (distanciaAlCentro <= this.radio) {
//       this.seleccionada = true;     
//     }
//   }

//   manejarMouseMove(event) {
//     if (this.seleccionada) {
//       contexto.clearRect(0, 0, canvas.width, canvas.height);
//       contexto.fillStyle = "#FFF"; // Restaurar el fondo blanco
//       contexto.fillRect(0, 0, canvas.width, canvas.height);
//       // Actualiza la posición de la ficha al seguir el movimiento del mouse
//       const rect = canvas.getBoundingClientRect();
//       this.x = event.clientX - rect.left;
//       this.y = event.clientY - rect.top;
//       this.dibujar(contexto);
//     }
//   }
  
//   manejarMouseUp() {
//       this.seleccionada = false;
//       // this.setXYInicial();
//   }

//   setXYInicial(){
//     this.x=this.xInicial;
//     this.y=this.yInicial;
//   }
// }