import { tareas, alternarTarea, eliminarTarea } from "./state.js";
import { guardarTareas } from "./persistence.js";

export function renderizarTareas(elementoLista) {
    elementoLista.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.textContent = tarea.titulo;

        if (tarea.completada) {
            li.classList.add("completada");
        }

        li.addEventListener("click", () => {
            alternarTarea(indice);
            guardarTareas();
            renderizarTareas(elementoLista);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";

        botonEliminar.addEventListener("click", (e) => {
            e.stopPropagation();
            eliminarTarea(indice);
            guardarTareas();
            renderizarTareas(elementoLista);
        });

        li.appendChild(botonEliminar);
        elementoLista.appendChild(li);
    });
}