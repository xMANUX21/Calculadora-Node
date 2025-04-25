export function configurarBotones(pantalla) {
    const botones = document.querySelectorAll("button[data-valor]")
    let operacion = ""
  
    function actualizarPantalla() { // funcion para limpiar o poner datos en pantalla
      pantalla.textContent = operacion || "0" // actualiza la pantalla a la operacion o 0
    }
  
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        operacion += boton.getAttribute("data-valor")
        actualizarPantalla()
      })
    })
  
    return {
      getOperacion: () => operacion, // devuelve el valor actual
      setOperacion: (nuevaOperacion) => { // actualiza la operacion
        operacion = nuevaOperacion
        actualizarPantalla()
      }
    }
  }