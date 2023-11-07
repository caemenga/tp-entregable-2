const canvas = document.getElementById('tablero');
const contexto = canvas.getContext('2d');
contexto.fillStyle = "#FFF"; // Color blanco
contexto.fillRect(0, 0, canvas.width, canvas.height);

class Tablero{
  constructor(maxFilas, maxColumn, altoCelda, anchoCelda, radioCirculo){
    this.tablero = [];
    this.maxFilas = maxFilas;
    this.maxColumn = maxColumn;
    this.altoCelda = altoCelda;
    this.anchoCelda = anchoCelda;
    this.radioCirculo = radioCirculo;
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
      
      
  }


  crearTablero() {
    const totalAnchoTablero = this.maxColumn * this.anchoCelda;
    const totalAltoTablero = this.maxFilas * this.altoCelda;

    const xInicial = (canvas.width - totalAnchoTablero) / 2;
    const yInicial = (canvas.height - totalAltoTablero) / 2;

    for (let fila = 0; fila < this.maxFilas; fila++) {
      
      this.tablero[fila] = [];
      for (let column = 0; column < this.maxColumn; column++) {
        let x = xInicial + column * this.anchoCelda;
        let y = yInicial + fila * this.altoCelda;
        if (fila === 0) {
          let nuevaCelda = new Celda(x, y, this.anchoCelda, this.altoCelda, this.radioCirculo);
          this.tablero[fila][column] = nuevaCelda;
        } else {
          let nuevaCelda1 = new CeldaTablero(x, y, this.anchoCelda, this.altoCelda, this.radioCirculo);
          this.tablero[fila][column] = nuevaCelda1;
        }
      }
    }
  }
    dibujar(contexto){
      for (let fila = 0; fila < 6; fila++) {
          for(let column = 0; column < 7; column++){

              this.tablero[fila][column].dibujar(contexto);

            }
          }
      }
    

    ubicarFicha(x,y,fichaN){
      let c = this.getColumna(x,y);
      let b = false;
      for (let fila = 5; fila > 0; fila--){
        

        
        console.log("fila"+fila);
       
        console.log("tablero1"+tablero.tablero[fila]);
        if(tablero.tablero[fila][c].ficha==null){
          
          console.log(fichaN);
          fichaN.x=tablero.tablero[fila][c].x+fichaN.radio;
          fichaN.y=tablero.tablero[fila][c].y+fichaN.radio;
          tablero.tablero[fila][c].ficha=fichaN;
          tablero.tablero[fila][c].contieneFicha=true;
          b=true;
          if(this.gano()){
            console.log("GANOOOO");
          }
          
          
          // fichaN.setXYInicial();
          break;
        }
      }
      return b;
    }

    getColumna(x,y){
      for (let i = 0; i <= this.tablero.length; i++) {
        let celda = this.tablero[0][i];
        
        if(celda.contienePunto(x,y)){
          return i;
            
        }
      }
      return -1;
    }
    gano(f,c){
      let sumaDerecha = this.sumaDerecha(f,c);
      let sumaIzquierda = this.sumaDerecha(f,c);
      let sumaDiagonalSuperiorDerecha = this.sumaDiagonalSuperiorDerecha(f,c);
      let sumaDiagonalSuperiorIzquierda = this.sumaDiagonalSuperiorIzquierda(f,c);
      let sumaDiagonalInferiorDerecha = this.sumaDiagonalInferiorDerecha(f,c);
      let sumaDiagonalInferiorIzquierda = this.sumaDiagonalInferiorIzquierda(f,c);
//      VER TEMA DEL XEN LINEA
        if((sumaDerecha==4)||(sumaIzquierda==4)||((sumaDerecha+sumaIzquierda)>=4)||(sumaDiagonalSuperiorDerecha==4)||(sumaDiagonalSuperiorIzquierda==4)||(sumaDiagonalInferiorDerecha==4)||(sumaDiagonalInferiorIzquierda==4)||((sumaDiagonalSuperiorDerecha+sumaDiagonalInferiorIzquierda)>=4)||((sumaDiagonalSuperiorIzquierda+sumaDiagonalInferiorDerecha)>=4)){
            return true;
        }
        return false;
      
    }
   
   
   
   
    sumaDiagonalSuperiorDerecha(f,c){
      let suma=1;
      
       while((c<this.maxColumn)&&(f<=0)&&(this.tablero[f--][c++].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c+=1;
          fila-=1;
       }
        return suma;
    }
    sumaDiagonalInferiorIzquierda(f,c){
      let suma=1;
      
       while((c>=0)&&(f<this.maxFilas)&&(this.tablero[f++][c--].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c-=1;
          fila+=1;
       }
      if(suma==4){
        //implementar
      }
      else
        return suma;
    }
    sumaDiagonalSuperiorIzquierda(f,c){
      let suma=1;
      
       while((c>=0)&&(f>=0)&&(this.tablero[f++][c++].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c-=1;
          fila-=1;
       }
      if(suma==4){
        //implementar
      }
      else
        return suma;
    }sumaDiagonalInferiorDerecha(f,c){
      let suma=1;
      
       while((c<this.maxColumn)&&(f<this.maxColumn)&&(c<this.maxColumn)&&(this.tablero[f++][c++].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c+=1;
          fila+=1;
       }
      if(suma==4){
        //implementar
      }
      else
        return suma;
    }
    sumaDerecha(f,c){
      let suma=1;
      
       while((c<this.maxColumn)&&(this.tablero[f][c++].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c-=1;
       }
      if(suma==4){
        //implementar
      }
      else
        return suma;
    }
    sumaIzquierda(f,c){
      let suma=1;
      
       while((c>0)&&(this.tablero[f][c--].idJugador == this.tablero[f][c].idJugador)&&(suma>=4)){  //o x
          suma++;
          c-=1;
       }
      if(suma==4){
        //implementar
      }
      else
        return suma;
    }
    coincideConCelda(x,y){
      for (let i = 0; i <= this.tablero.length; i++) {
        
        if(this.tablero[0][i].contienePunto(x,y)){
          return true;
        }
      }
      return false;
    }
    esMiTurno(fichaMetodo){
      let fichasJugador1=0;
      let fichasJugador2=0;
      for (let index = 0; index < this.tablero.length; index++) {
          for (let c = 0; c < this.maxColumn; c++) {
            if((this.tablero[index][c].ficha!=null)){
              if(this.tablero[index][c].ficha.idJugador == fichaMetodo.idJugador){
                fichasJugador1++;
                console.log("fichasJ1"+fichasJugador1)
              }
              else{
                fichasJugador2++;
                console.log("fichasJugador2"+fichasJugador1)
              }
            }
            
            
          }
        
      }
      console.log("fichasJ1"+fichasJugador1);
      console.log("fichasJ2"+fichasJugador2);
      console.log("id jugador"+fichaMetodo.idJugador);
      if (fichaMetodo.idJugador==2) {
        return fichasJugador1<fichasJugador2;
      }
      else{
        return fichasJugador1=fichasJugador2;
      }
    }
    estaVacio(){
      for (let index = 0; index < this.tablero.length; index++) {
        for (let c = 0; c < this.maxColumn; c++) {
          
            if(this.tablero[index][c].ficha!=null){
              return false;
            }
            
            
          
          
        }
      
    }
    return true;
    }
  }
    class Ficha {
      constructor(id,x, y, r, c, contexto, imagenSrc, ancho) {
        this.idJugador=id;
        this.radio = r;
        this.color = c;
        this.x = x;
        this.y = y;
        this.xInicial = x;
        this.yInicial = y;
        this.ancho = ancho;
        this.contexto = contexto
        this.seleccionada = false;
    
        this.imagen = new Image();
        this.imagen.src = imagenSrc;
        this.imagen.onload = () => {
          this.dibujar();
        }
    
        canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
        canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
        canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
      }
    
     
    
      dibujar() {
        
        this.contexto.beginPath();
        this.contexto.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);    
        // ancho y alto de la imagen
        let anchoimagen = this.imagen.width;
        let altoimagen = this.imagen.height;
    
        //para que no se rompa la imagen
        let aspecto = anchoimagen / altoimagen;
    
        let ancho = this.radio *1.5; // Cambia el ancho según tus necesidades
        let altura = ancho / aspecto;
        const patron = this.contexto.createPattern(this.imagen, "no-repeat");
          this.contexto.fillStyle = patron;
    
        //dibuja
        this.contexto.drawImage(this.imagen, this.x - ancho / 2, this.y - altura / 2, ancho, altura);
          
    
        
      }
    
      dibujarApilado(){
        
        this.contexto.beginPath();
        this.contexto.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        
      
          // Si la imagen está cargada, utiliza la imagen como patrón
          // const patron = this.contexto.createPattern(this.imagen, "no-repeat");
          // contexto.fillStyle = patron;
    
          // Si la imagen no está cargada, utiliza un color de relleno predeterminado
          // contexto.fillStyle = "#FF0000"; // Color del círculo (rojo en este caso
        this.contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
        this.contexto.stroke();
        this.contexto.shadowBlur = 5;
        this.contexto.shadowColor = "rgba(0, 0, 0, 0.8)";
        this.contexto.fill();
    
          // Restablece las sombras para futuros dibujos
        this.contexto.shadowBlur = 0;
        this.contexto.closePath();
          
    
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
          let b=this.esMiTurno();
          console.log("turno"+b);
          let b2=tablero.estaVacio(); 
          console.log("vacio"+b2);
          if(b||b2){
            this.seleccionada = true; 
          }
        
        }
        
        
        this.dibujar();
        this.dibujarApilado;    
        tablero.dibujar(contexto);
      }

      esMiTurno(){
        return tablero.esMiTurno(this);
      }
    
      manejarMouseMove(event) {
        if (this.seleccionada) {
          
          contexto.fillStyle = "#FFF"; // Restaurar el fondo blanco
          contexto.fillRect(0, 0, canvas.width, canvas.height);
          // Actualiza la posición de la ficha al seguir el movimiento del mouse
          const rect = canvas.getBoundingClientRect();
          this.x = event.clientX - rect.left;
          this.y = event.clientY - rect.top;
          this.dibujar(contexto);

        }
        tablero.dibujar(contexto);
         
      }
      
      manejarMouseUp(event) {
        
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        if(tablero.coincideConCelda(mouseX,mouseY)){
          this.seleccionada = false;

        }
        else{
          this.seleccionada = false;
          this.setXYInicial();
        }
        
          this.dibujar();
          this.dibujarApilado();  
      }
    
      setXYInicial(){
        this.x=this.xInicial;
        this.y=this.yInicial;
      }
      contienePunto(x, y) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const distanciaAlCentro = Math.sqrt(
          Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
        );
    
        if (distanciaAlCentro <= this.radio) {
          return  true;     
        }   
        return false;
    }
  }

    
class Celda {
  constructor(x, y, ancho, alto, radioCirculo) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.radioCirculo = radioCirculo;
    this.ficha=null;
    this.contieneFicha = false;


    
    canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
  }

  dibujar( contexto) {
    
    // Dibuja la celda en el contexto del canvas
    contexto.fillStyle = "#FFFFFF"; // Color de celda blanca
    contexto.fillRect(this.x, this.y, this.ancho, this.alto);
    // Dibuja un borde para resaltar las celdas
    contexto.strokeStyle = "#000000";
    contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
    // Dibuja un círculo en la celda (por ejemplo, en la fila 2, columna 3)
     
    contexto.beginPath();
    contexto.arc(
      this.x + this.ancho / 2,
      this.y + this.alto / 2,
      this.radioCirculo,
      0,
      2 * Math.PI
    );
    contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
    contexto.stroke();
    contexto.closePath();
   
  }

  manejarMouseUp(event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    
    // Itera sobre todas las celdas y verifica si el punto de soltar el mouse está dentro de alguna celda
    // for (let i = 0; i < tablero.length; i++) {
      //   const celda = tablero[0][i];
      if (this.contienePunto(x, y)) {
        //preguntar si es valido
        // La ficha se soltó sobre esta celda
        
        
          let fichaAux=buscarFicha(x,y);
          
          if(tablero.ubicarFicha(x,y,fichaAux)==false){
            console.log("no hay lugar");
          };
          
          tablero.dibujar(contexto);
          // fichaAux.dibujar(contexto);
          // this.dibujar(contexto);
          // Aquí puedes realizar acciones adicionales, como dibujar la ficha en la celda
          // o registrar que la celda ahora contiene la ficha
          // Luego, puedes volver a dibujar todo el canvas para reflejar los cambios
          
        
      
        
    }
  }
  contienePunto(x, y) {
       return (((x >= this.x) && (x <= (this.x + this.ancho))) && ((y >= this.y) && (y <= (this.y + this.alto))));
  }
}

class CeldaTablero {
  constructor(x, y, ancho, alto, radioCirculo) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.radioCirculo = radioCirculo;
    this.ficha=null;
    this.contieneFicha = false;


    // canvas.addEventListener('mousedown', this.manejarMouseDown.bind(this));
    // canvas.addEventListener('mousemove', this.manejarMouseMove.bind(this));
    // canvas.addEventListener('mouseup', this.manejarMouseUp.bind(this));
  }

  dibujar( contexto){
    if(this.ficha==null){
      contexto.fillStyle = "#500487"; // Color de celda blanca
      contexto.fillRect(this.x, this.y, this.ancho, this.alto);
    
      // Dibuja un borde para resaltar las celdas
      contexto.strokeStyle = "#000000";
      contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
      // Dibuja un círculo en la celda (por ejemplo, en la fila 2, columna 3)
      
      contexto.beginPath();
      contexto.arc(
        this.x + this.ancho / 2,
        this.y + this.alto / 2,
        this.radioCirculo,
        0,
        2 * Math.PI
      );
      
      contexto.fillStyle = "#ffffff"; // Cambia el color del relleno del círculo a blanco
      contexto.fill();
    
      contexto.strokeStyle = "#00000"; // Cambia el color del trazo del círculo a blanco
      contexto.stroke();
      
      contexto.closePath();
    }
    else{
      this.ficha.dibujar();
    }
  }
}


function buscarFicha(x,y){
  for (let i = 0; i < fichasJ1.length; i++) {
    const ficha = fichasJ1[i];
    if (ficha.contienePunto(x, y)) {
      return ficha; // Se encontró la ficha en el primer arreglo
    }
  }

  // Recorre el segundo arreglo de fichas
  for (let i = 0; i < fichasJ2.length; i++) {
    const ficha = fichasJ2[i];
    if (ficha.contienePunto(x, y)) {
      return ficha; // Se encontró la ficha en el segundo arreglo
    }
  }

  // Si no se encontró ninguna ficha, retorna null
  return null;
}


let tablero = new Tablero(6,7, 60, 60, 18);
tablero.crearTablero();
console.log("contexto en canvas" + contexto);
tablero.dibujar(contexto);

let cantidadFichas = 10;
let espacioEntreFichas = 10;
let imagenSrc = "C:/Users/fvg/Desktop/tp-entregable-2/images/avatar.jpg";
let imagenSrc2 = "C:/Users/fvg/Desktop/tp-entregable-2/images/facebook.png";

let fichasJ1 = []

let fichasJ2 = []
let yJ1 = 400;
let xJ1 = 100;
let yJ2 = 400;
let xJ2 = 1000;
let ancho = 20;
for (let i = 0; i < cantidadFichas; i++) {
  yJ1-=espacioEntreFichas;
  let ficha = new Ficha(1,xJ1, yJ1+i, 18, 'green', contexto, imagenSrc,ancho);
  fichasJ1.push(ficha);
}
console.log("tamaño fichasJ1 = " +fichasJ1.length);
fichasJ1.forEach(ficha => {
  
  ficha.dibujarApilado();
});


for (let i = 0; i < cantidadFichas; i++) {
  yJ2-=espacioEntreFichas;
  let ficha = new Ficha(2,xJ2, yJ2+i, 18, 'green', contexto, imagenSrc2, ancho);
  fichasJ2.push(ficha);
}
fichasJ2.forEach(ficha => {
  
  ficha.dibujarApilado();
});

// let ficha = new Ficha(100, 100, 18, 'green', contexto, imagenSrc, ancho);
// ficha.dibujar();






