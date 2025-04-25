import { configurarBotones } from './botones.js'

document.addEventListener("DOMContentLoaded", () => { // hace que no hayan errores si no se ha cargado el navegador
  const pantalla = document.getElementById("pantalla");
  const clear=document.getElementById("clear")
  const igual=document.getElementById("igual")
  
  const { getOperacion, setOperacion } = configurarBotones(pantalla)// traigo las funciones de mi objeto  no como const funciones = configurarBotones y luego funciones.getOperacion

  igual.addEventListener("click", () => {
      setOperacion(eval(getOperacion()).toString()) //optiene el valor,,hace la operacion actual,  la convierte como string  , y la establece en la pantalla
  })

  clear.addEventListener("click", () => {
    setOperacion("")// establece la pantalla a 0
  })
})