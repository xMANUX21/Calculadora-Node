const pantalla = document.getElementById("pantalla")
const botones = document.querySelectorAll("button[data-valor]")
const igual = document.getElementById("igual")
const clear = document.getElementById("clear")

let operacion = ""

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    operacion += boton.getAttribute("data-valor")
    pantalla.innerHTML = operacion;
  })
});

igual.addEventListener("click", () => {
    const resultado = eval(operacion) // hace la operacion
    operacion = resultado.toString() // paso a string los resultados
    pantalla.innerHTML = resultado // muestro el pantalla el resultado
});

clear.addEventListener("click", () => {
  operacion = ""
  pantalla.innerHTML = "0";
});
