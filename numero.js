const boton = document.getElementById("boton");
let respuesta = document.getElementById("respuesta");

boton.addEventListener("click", () => {
  let A = document.getElementById("numero1");
  let B = document.getElementById("numero2");
  let C = document.getElementById("numero3");
  let D = document.getElementById("numero4");
  A = parseInt(A.value);
  B = parseInt(B.value);
  C = parseInt(C.value);
  D = parseInt(D.value);

  //Aca verifico que los datos sean de tipo numérico preguntando con isNaN
  if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) {
    respuesta.textContent = "Error: Debe ingresar solo números";
  } else {
    if (A != B && A != C && A != D && B != C && B != D && C != D) {
      const ListaNumeros = [A, B, C, D];
      console.log(ListaNumeros);
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
