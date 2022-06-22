const boton = document.getElementById("boton");


boton.addEventListener("click", () => {
  let A = document.getElementById("numero1");
  let B = document.getElementById("numero2");
  let C = document.getElementById("numero3");
  let D = document.getElementById("numero4");
  let respuesta = document.getElementById("respuesta");
 
 //Convierto a flotantes
  A = parseFloat(A.value);
  B = parseFloat(B.value);
  C = parseFloat(C.value);
  D = parseFloat(D.value);

  //Aca verifico que los datos sean de tipo numérico preguntando con isNaN
  if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) {
    respuesta.textContent = "Error: Debe ingresar solo números";
  } else {
    //Aca verifico que los valores no coincidan
    if (A != B && A != C && A != D && B != C && B != D && C != D) {
      const ListaNumeros = [A, B, C, D]; // Agrego los números a una lista
      console.log(ListaNumeros); // imprimo en consola

      // Agrego la respuesta al dom (objeto respuesta)
      // Utilizamos el Spread Operator (...) "Los 3 puntos"
      // transformamos la variable ListaNumeros en una lista de argumentos
      respuesta.innerHTML =
        "El valor máximo es: " +
        Math.max(...ListaNumeros) +
        "<br>" +
        "El valor mínimo es: " +
        Math.min(...ListaNumeros);
    } else {
      respuesta.textContent = "Error: Ninguno de los números deben ser iguales";
    }
  }
});
