export let tareas = [];

export function agregarTarea(tarea) {
    tareas.push(tarea);
}

export function eliminarTarea(indice) {
    tareas.splice(indice, 1);
}

export function alternarTarea(indice) {
    tareas[indice].completada = !tareas[indice].completada;
}

export function establecerTareas(nuevasTareas) {
    tareas = nuevasTareas;
}