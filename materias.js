
const ulvalores = document.getElementById("ulvalores");
const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
let respuesta = document.getElementById("respuesta");


//**** Función que recorre la materias que ingresé para crear los inputs y validar su información
const ingresarvalores = (valor) => {
    
  //Este es un for que me llena de lis, recorro el for dependiendo de la cantidad de materias
  for (let step = 0; step < valor; step++) {
    ulvalores.innerHTML += `<li><input type="number" class="form-control mt-2 valoresmaterias" 
    placeholder="Ingrese el valor de la materia ${step + 1}"></li>`;
  }

  //Por último agrego un botón para comprobar los nuevos campos creados dinámicamente
  ulvalores.innerHTML +=
    "<button class='btn btn-danger mt-2' id = 'botonfinalizar'>Finalizar</button>";

  //Creo la función del boton finalizar
  const botonfinalizar = document.getElementById("botonfinalizar");
  botonfinalizar.addEventListener("click", () => {
    //creo una constante que me trae todos los objetos
    //con la clase valoresmaterias las cuales fueron creadas dinámicamente
    const items = document.getElementsByClassName("valoresmaterias");

    //recorro los items y su valor
    let costomaterias = 0;
    let contadorerrores = 0;
    for (let x = 0; x < items.length; x++) {
      
      if(isNaN(parseInt(items[x].value))){      
        contadorerrores += 1;
      }
      console.log(items[x].value);
      costomaterias = costomaterias + parseInt(items[x].value); //Sumo los valores obtenidos

    }
    
    // Compruebo si hay errores de acuerdo al contador
    if (contadorerrores > 0){
        alert("Solo debe escribir números válidos")

    }else{

    let descuento = costomaterias * 0.2;
    const papeleria = 20000;
    const carne = 8000;

    //Imprimo en pantalla los resultados
    respuesta.innerHTML = `Estudiante: ${nombre.value}<br>
    Valor total de las Materias: ${costomaterias}<br>
    Descuento: ${descuento} <br>
    Valor con Descuento: ${costomaterias - descuento} <br>
    Valor a Pagar (Papeleria + Carné + Valor Materias con Descuento): ${
      papeleria + carne + (costomaterias - descuento)
    }`;
    console.log("Costo Materias: ", costomaterias);

    }
    
  });
};



boton.addEventListener("click", () => {
  const cantidadmaterias = document.getElementById("materias");
  let errores = 0;
  ulvalores.innerHTML ="" // Limpio el innerHTML

  // Valido los campos
  if (cantidadmaterias.value == "") {
    alert("Debe ingresar la cantidad de materias");
    errores = errores + 1;
  }

  if(isNaN(cantidadmaterias.value)){
    alert("Debe ingresar un número válido en la cantidad de materias");
    errores = errores + 1;

  }

  if (nombre.value == "") {
    alert("Debe ingresar el nombre del alumno");
    errores = errores + 1;
  }

  if (errores == 0) {
    const materias = parseInt(cantidadmaterias.value);
    //Lo envio a la función ingresarvalores
    if (materias >= 1) {
      ingresarvalores(materias);
    }
  }
});
