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