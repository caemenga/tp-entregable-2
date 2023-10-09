document.addEventListener("DOMContentLoaded", function() {

    let percentage = document.querySelector(".porcentaje");
  
    let progreso = 0;
  
    function actualizarPorcentaje() {
      progreso += 1;
      if (progreso <= 100) {
        percentage.innerHTML = `${progreso}%`;
      }
      if(progreso === 100){
        window.location.href = 'index.html';
    }
    }
    
  
    setInterval(actualizarPorcentaje, 50);
  });

  