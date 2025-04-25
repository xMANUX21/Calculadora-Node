export const crearBotones = (setOperacion) => {
    const botones = document.querySelectorAll("button[data-valor]");
    
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const valor = boton.getAttribute("data-valor");
        setOperacion((operacionActual) => operacionActual + valor);
      });
    });
  };