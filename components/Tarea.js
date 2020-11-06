class Tarea {

    constructor(task){
        
        this.task = task;
        
    }
    
    render = ()=> {
    
        let component = document.createElement('div');
        component.className = 'disTareas';
    
        var borrar = document.createElement('button');
        borrar.className = 'borrarButton';
    
        var movIzquierda = document.createElement('button');
        movIzquierda.className = 'MovIzqButton';
    
        var movDerecha = document.createElement('button');
        movDerecha.className = 'MovDerButton';
    
        switch(this.task.tipo){
    
            case 'toDo':
    
                var toDo = document.createElement('div');
                toDo.className = 'toDo';
    
                var actToDo = document.createElement('div');
                actToDo.innerHTML = this.task.actividad;
    
                toDo.appendChild(actToDo);
                toDo.appendChild(borrar);
                toDo.appendChild(movDerecha);

                component.appendChild(toDo);
    
                break;
    
            case 'doing':
                var doing = document.createElement('div');
                doing.className = 'doing';
    
                var actDoing = document.createElement('div');
                actDoing.innerHTML = this.task.actividad;
    
                doing.appendChild(actDoing);
                doing.appendChild(borrar);
                doing.appendChild(movIzquierda);
                doing.appendChild(movDerecha);

                component.appendChild(doing);
    
                break;
    
            case 'done':
    
                var done = document.createElement('div');
                done.className = 'done';
    
                var actDone = document.createElement('div');
                actDone.innerHTML = this.task.actividad;
    
                done.appendChild(actDone);
                done.appendChild(borrar);
                done.appendChild(movIzquierda);

                component.appendChild(done);
    
                break;
    
        }

const movimientoIzq = ()=> {

    var accionMovI = this.task;

    switch(accionMovI.tipo){

        case 'doing':

            accionMovI.tipo = 'toDo';
        database.ref('QuizDos/Actividades/' + accionMovI.id).set(accionMovI);

        break;

        case 'done':

            accionMovI.tipo = 'doing';
        database.ref('QuizDos/Actividades/' + accionMovI.id).set(accionMovI);

        break;
    }
};
movIzquierda.addEventListener('click',movimientoIzq);

const movimientoDer = ()=> {

    var accionMovD = this.task;

    switch(accionMovD.tipo){

        case 'toDo':

            accionMovD.tipo = 'doing';
        database.ref('QuizDos/Actividades/' + accionMovD.id).set(accionMovD);

        break;

        case 'doing':

            accionMovD.tipo = 'done';
        database.ref('QuizDos/Actividades/' + accionMovD.id).set(accionMovD);

        break;
    }
};
movDerecha.addEventListener('click',movimientoDer);

const borrarElemento = ()=> {

    var accionDel = this.task;
    database.ref('QuizDos/Actividades/' + accionDel.id).set(null);

}
borrar.addEventListener('click',borrarElemento);

return component;
};
}