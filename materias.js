const cantidadmaterias = document.getElementById('materias');
const ulvalores = document.getElementById('ulvalores');
const boton = document.getElementById('boton');
const nombre = document.getElementById('nombre');

const ingresarvalores = (valor) => {
    //Este es un for que me llena de lis 
    for (let step = 0; step < valor; step++) {
        ulvalores.innerHTML += `<li><input type="text" id="valor${step + 1}" class="form-control mt-2" placeholder="Ingrese el valor de la materia ${step + 1}"></li>`
    }
    ulvalores.innerHTML += "<button class='btn btn-danger mt-2'>Finalizar</button>"
}


boton.addEventListener('click', () => {
    let errores = 0

    if (cantidadmaterias.value == "") {
        alert("Debe ingresar la cantidad de materias")
        errores = errores + 1;
    }

    if (nombre.value == "") {
        alert("Debe ingresar el nombre del alumno")
        errores = errores + 1;
    }

    if (errores == 0) {
        const materias = parseInt(cantidadmaterias.value)
        //boton.style.display = "none";
        if (materias >= 1) {
            ingresarvalores(materias)
        }

    }



})