const canvas = document.getElementById('tablero');
const contexto = canvas.getContext('2d');
contexto.fillStyle = "#FFF"; // Color blanco
contexto.fillRect(0, 0, canvas.width, canvas.height);

class Tablero{
  constructor(xenlinea,maxFilas, maxColumn, altoCelda, anchoCelda, radioCirculo){
    this.tablero = [];
    this.xEnLinea=xenlinea;
    this.maxFilas = maxFilas;
    this.maxColumn = maxColumn;
    this.altoCelda = altoCelda;
    this.anchoCelda = anchoCelda;
    this.radioCirculo = radioCirculo;
    this.idUltimaFicha;
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
      for (let fila = 0; fila < this.maxFilas; fila++) {
          for(let column = 0; column < this.maxColumn; column++){

              this.tablero[fila][column].dibujar(contexto);

            }
          }
      }
    

    ubicarFicha(x,y,fichaN){
      let c = this.getColumna(x,y);
      let b = false;
      for (let fila = 5; fila > 0; fila--){
        

        
        
        if(tablero.tablero[fila][c].ficha==null){
          
         
          fichaN.x=tablero.tablero[fila][c].x+fichaN.radio;
          fichaN.y=tablero.tablero[fila][c].y+fichaN.radio;
          tablero.tablero[fila][c].ficha=fichaN;
          tablero.tablero[fila][c].contieneFicha=true;
          this.idUltimaFicha=fichaN.idJugador;
          b=true;
          let gano=this.gano(fila,c); 
          if(gano){
            const largo = canvas.width;
            const ancho = canvas.height;
            const X = canvas.width / 2;
            const Y = canvas.height / 2;
            contexto.fillStyle ="black";
            contexto.clearRect(0,0,largo,ancho);
            contexto.fillRect(0,0,largo,ancho);
            contexto.fillStyle = 'blue';
            contexto.font = '30px Arial';
            contexto.fillText("GANO EL JUGADOR " + fichaN.idJugador, 50, 50);
            
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
      let sumaIzquierda = this.sumaIzquierda(f,c);
      let sumaArriba = this.sumaArriba(f,c);
      let sumaAbajo = this.sumaAbajo(f,c);
      let sumaDiagonalSuperiorDerecha = this.sumaDiagonalSuperiorDerecha(f,c);
      let sumaDiagonalSuperiorIzquierda = this.sumaDiagonalSuperiorIzquierda(f,c);
      let sumaDiagonalInferiorDerecha = this.sumaDiagonalInferiorDerecha(f,c);
      let sumaDiagonalInferiorIzquierda = this.sumaDiagonalInferiorIzquierda(f,c);
      console.log("sumaDerecha "+sumaDerecha+" SumaIzuqierda "+sumaIzquierda);
//      VER TEMA DEL XEN LINEA
      if(((sumaAbajo+sumaArriba-1)>=this.xEnLinea)||(sumaAbajo==this.xEnLinea)||(sumaArriba==this.xEnLinea)||(sumaDerecha==this.xEnLinea)||(sumaIzquierda==this.xEnLinea)||((sumaDerecha+sumaIzquierda-1)>=this.xEnLinea)||(sumaDiagonalSuperiorDerecha==this.xEnLinea)||(sumaDiagonalSuperiorIzquierda==this.xEnLinea)||(sumaDiagonalInferiorDerecha==this.xEnLinea)||(sumaDiagonalInferiorIzquierda==this.xEnLinea)||((sumaDiagonalSuperiorDerecha+sumaDiagonalInferiorIzquierda-1)>=this.xEnLinea)||((sumaDiagonalSuperiorIzquierda+sumaDiagonalInferiorDerecha-1)>=this.xEnLinea)){

            return true;
        }
        return false;
      
    }
   
   
   
   
    sumaDiagonalSuperiorDerecha(f,c){
      let suma=1;
      let cAux=c+1;
      let fAux=f-1;
       while((cAux<this.maxColumn)&&(fAux<=0)&&(this.tablero[fAux][cAux].ficha!=null)&&(this.tablero[fAux][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          c+=1;
          f-=1;
          cAux+=1;
          fAux-=1;
       }
        return suma;
    }
    sumaDiagonalInferiorIzquierda(f,c){
      let suma=1;
      let cAux = c-1;
      let fAux=f+1;
      
       while((cAux>=0)&&(fAux<this.maxFilas)&&(this.tablero[fAux][cAux].ficha!=null)&&(this.tablero[fAux][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          c-=1;
          f+=1;
          cAux-=1;
          fAux+=1;
       }
       return suma;
      
    }
    sumaDiagonalSuperiorIzquierda(f,c){
      let suma=1;
      console.log("ficha "+this.tablero[f--][c--].ficha);
      let cAux=c-1;
      let fAux=f-1;

       while((cAux>=0)&&(fAux>=0)&&(this.tablero[fAux][cAux].ficha!=null)&&(this.tablero[fAux][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          c-=1;
          f-=1;
          cAux-=1;
          fAux-=1;
       }
     
        return suma;
    }
    sumaDiagonalInferiorDerecha(f,c){
      let suma=1;
      let cAux = c+1;
      let fAux= f+1;
     
     

       while((cAux<(this.maxColumn-1))&&(fAux<this.maxColumn-1)&&(this.tablero[fAux][cAux].ficha!=null)&&(this.tablero[fAux][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          c+=1;
          f+=1;
          cAux+=1;
          fAux+=1;
       }
       return suma;
      
    }
    sumaDerecha(f,c){
      let suma=1;
      let cAux= c+1;
      
       while((cAux<this.maxColumn)&&(this.tablero[f][cAux].ficha!=null)&&(this.tablero[f][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          c+=1;
          cAux=cAux+1;
       }
      
        return suma;
      
    }
    sumaIzquierda(f,c){
      let suma=1;
      let cAux=c-1;
      


      while((cAux>=0)&&(this.tablero[f][cAux].ficha!=null)&&(this.tablero[f][cAux].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma+=1;
          c-=1;
          cAux=cAux-1;
       }
      
      return suma;
    }
    sumaArriba(f,c){
      let suma=1;
      let fAux= f-1;
      console.log("f y c "+f+c);
       while((fAux>=0)&&(this.tablero[fAux][c].ficha!=null)&&(this.tablero[fAux][c].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          f-=1;
          fAux-=1;
       }
      
        return suma;
      
    }
    sumaAbajo(f,c){
      let suma=1;
      let fAux= f+1;
      
       while((fAux<this.maxFilas)&&(this.tablero[fAux][c].ficha!=null)&&(this.tablero[fAux][c].ficha.idJugador == this.tablero[f][c].ficha.idJugador)&&(suma<4)){  //o x
          suma++;
          f+=1;
          fAux=fAux+1;
       }
      
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
      return fichaMetodo.idJugador!=this.idUltimaFicha;
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
        
          this.contexto.strokeStyle = "#FF0000"; // Color del círculo (rojo en este caso)
        this.contexto.stroke();
        this.contexto.shadowBlur = 5;
        this.contexto.shadowColor = "rgba(0, 0, 0, 0.8)";
        this.contexto.fill();
    
          // Restablece las sombras para futuros dibujos
        this.contexto.shadowBlur = 0;
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
    
        if ((distanciaAlCentro <= this.radio)&&(this.x=this.xInicial)) {
          let b=this.esMiTurno();
          
          let b2=tablero.estaVacio(); 
          
          if(b||b2){
            this.seleccionada = true; 
          }
        
        }
        
        
            
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
          
        }
        this.dibujar();
        
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
            this.dibujar();
        }
        this.dibujar();
        
        
        
            
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
      this.ficha.x=this.x + this.ancho / 2;
      this.ficha.y=this.y + this.ancho / 2;

      this.ficha.dibujar();
      
    }
  }
}


function buscarFicha(x,y){
  for (let i = 0; i < fichasJ1.length; i++) {
    const ficha = fichasJ1[i];
    console.log("entra a buscafchia");
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

let imagenBoca = "images/juego/bocaJr.jpg";
let imagenRiver = "images/juego/River-plate.jpg";
let imagenRacing = "images/juego/Racing-club.jpg";

let fichasJ1 = []

let fichasJ2 = []


let tablero = null;
let contador = 600;
// tablero.crearTablero();
// console.log("contexto en canvas" + contexto);
// tablero.dibujar(contexto);

let espacioEntreFichas = 10;
let cuatroEnLinea = document.getElementById("4enLinea");
let cincoEnLinea = document.getElementById("5enLinea");
let seisEnLinea = document.getElementById("7enLinea"); 

cuatroEnLinea.addEventListener("click", jugar4enLinea);
cincoEnLinea.addEventListener("click", jugar5enLinea);
seisEnLinea.addEventListener("click", jugar6enLinea);


function jugar4enLinea(){
  tablero = new Tablero(4,6,7, 60, 60, 18);
  tablero.crearTablero();
  console.log("entro en 4 en Linea!");
  tablero.dibujar(contexto);

  document.getElementById("modoJuego").style.display = "none";
  document.getElementById("pantallaJuego").classList.toggle("show");
  crearPilas(21);
  setTimeout(contar, 1000);
}

function jugar5enLinea(){
  console.log("entro en 5 en Linea!");
  tablero = new Tablero(5,7,8, 60, 60, 18);
  tablero.crearTablero();
  console.log("contexto en canvas" + contexto);
  tablero.dibujar(contexto);
  document.getElementById("modoJuego").style.display = "none";
  document.getElementById("pantallaJuego").classList.toggle("show");
  crearPilas(28);
  setTimeout(contar, 1000);
}

function jugar6enLinea(){
  console.log("entro en 7 en Linea!");
  tablero = new Tablero(6,8,9, 60, 60, 18);
  tablero.crearTablero();
  console.log("contexto en canvas" + contexto);
  tablero.dibujar(contexto);


  cantidadFichas = 36;
  espacioEntreFichas = 10;
  document.getElementById("modoJuego").style.display = "none";
  document.getElementById("pantallaJuego").classList.toggle("show");
  crearPilas(36);
  setTimeout(contar, 1000);
}





function crearPilas(cantidadFichas){
  let yJ1 = 400;
  let xJ1 = 100;
  let yJ2 = 400;
  let xJ2 = 1000;
  let ancho = 20;
  for (let i = 0; i < cantidadFichas; i++) {
    yJ1-=espacioEntreFichas;
    let ficha = new Ficha(1,xJ1, yJ1+i, 18, 'green', contexto, imagenBoca,ancho);
    fichasJ1.push(ficha);
  }
  
  fichasJ1.forEach(ficha => {
    
    ficha.dibujar();
  });
  
  
  for (let i = 0; i < cantidadFichas; i++) {
    yJ2-=espacioEntreFichas;
    let ficha = new Ficha(2,xJ2, yJ2+i, 18, 'green', contexto, imagenRiver, ancho);
    fichasJ2.push(ficha);
  }
  fichasJ2.forEach(ficha => {
    
    ficha.dibujar();
  });

}

// let ficha = new Ficha(100, 100, 18, 'green', contexto, imagenSrc, ancho);
// ficha.dibujar();




 
let botonJugar = document.getElementById("botonJugar");

botonJugar.addEventListener('click', jugar);

function jugar(){
  document.getElementById("pantallaPreJuego").style.display = "none";
  console.log(document.getElementById("pantallaJuego"));
  document.getElementById("modoJuego").style.visibility = "visible";
  
}




function contar(){


  console.log("ENTRO EN CONTAR");
  const X = canvas.width / 2;
  const Y = 30;
  contexto.fillStyle ="white";
  contexto.clearRect(X,Y,50,-40);
  contexto.fillRect(X,Y,50,-40);
  contexto.fillStyle = 'black';
  contexto.font = '30px Arial';
  contexto.fillText(contador, X, Y);
  contador--;
  if (contador >= 0){
   console.log("Entro a contador > 0");
    // Llama a la función nuevamente después de 1 segundo
    setTimeout(contar, 1000);
  } else {
    console.log("ENTRO EN CONTADOR = 0")
    document.getElementById("reiniciarJuego").style.display = "block";
    document.getElementById("pantallaJuego").style.display = "none";
    
  }
}




