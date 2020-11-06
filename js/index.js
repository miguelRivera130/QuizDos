const descripcion = document.getElementById('descripcion');
const guardar = document.getElementById('saveDescripcion');

const apartadoActividades = document.getElementById('apartadoActividades')

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

    apartadoActividades.innerHTML = '';

    data.forEach(
        
        task => {

            let valor = task.val();
            let actividad = new Tarea(valor);
            apartadoActividades.appendChild(actividad.render());
        
    });

});

