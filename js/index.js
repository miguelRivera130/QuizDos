const descripcion = document.getElementById('descripcion');
const guardar = document.getElementById('saveDescripcion');
const actividades = document.getElementById('disTareas')

const database = firebase.database();

guardarTarea = ()=>{

    let d = descripcion.value;
    let envio = database.ref('QuizDos/Actividades').push();

    if (d == '' || d == ' '){

        alert('escribe tu tarea antes de guardar');
        return;

    }

    let objetoActividad = {

        actividad : d,
        tipo : 'toDo',
        id : envio.key

    }
    envio.set(objetoActividad);
    descripcion.value = '';
}
guardar.addEventListener('click',guardarTarea);

database.ref('QuizDos/Actividades').on('value',function(data){

    //actividades.innerHTML = '';

    data.forEach(
        tareas => {

            let valor = tareas.val();
            let disActividades = new Tarea(valor);
            actividades.appendChild(disActividades.render());
        
    });

});

