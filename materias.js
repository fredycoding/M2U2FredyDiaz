const cantidadmaterias = document.getElementById('materias');
const ulvalores = document.getElementById('ulvalores');
const boton = document.getElementById('boton');
const nombre = document.getElementById('nombre');


const ingresarvalores = (valor) => {
    //Este es un for que me llena de lis, recorro el for dependiendo de la cantidad de materias
    for (let step = 0; step < valor; step++) {
        ulvalores.innerHTML += `<li><input type="text" id="valor${step + 1}" class="form-control mt-2 valoresmaterias" placeholder="Ingrese el valor de la materia ${step + 1}"></li>`
    }
    //Por último agrego un botón para comprobar los nuevos campos creados dinámicamente
    ulvalores.innerHTML += "<button class='btn btn-danger mt-2' id = 'botonfinalizar'>Finalizar</button>"
    
    //Creo la función del boton finalizar
    const botonfinalizar = document.getElementById('botonfinalizar');
    botonfinalizar.addEventListener('click', () => {
        //creo una constante que me trae todos los objetos 
        //con la clase valoresmaterias las cuales fueron creadas dinámicamente
        const items = document.getElementsByClassName("valoresmaterias")

        //recorro los items y su valor
        let costomaterias = 0
        for (let x = 0; x < items.length; x++) {
            console.log(items[x].value)
            costomaterias = costomaterias + parseInt(items[x].value)
        } 

        console.log("Costo Materias: ", costomaterias);
    })

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

