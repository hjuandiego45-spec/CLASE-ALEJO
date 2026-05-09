

        
            let tareas = [];

            function guardarTareas() {
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }

            function cargarTareas() {
                const data = localStorage.getItem("tareas");
                if (data) {
                    tareas = JSON.parse(data);
                }
            }

            const formulario = document.getElementById("task-formulario");
            const inputTarea = document.getElementById("task-inputTarea");
            const listaTareas = document.getElementById("task-listaTareas");
            const botonAPI = document.getElementById("load-api");

            function renderizarTareas() {
                listaTareas.innerHTML = "";

                tareas.forEach((task, indice) => {
                    const li = document.createElement("li");
                    li.textContent = task.title;

                    if (task.completed) {
                        li.classList.add("completed");
                    }

                    li.addEventListener("click", () => {
                        task.completed = !task.completed;
                        guardarTareas();
                        renderizarTareas();
                    });

                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "X";

                    deleteBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        tareas.splice(indice, 1);
                        guardarTareas();
                        renderizarTareas();
                    });

                    li.appendChild(deleteBtn);
                    listaTareas.appendChild(li);
                });
            }

            /*********************
             * EVENTOS 😬
             *********************/
            formulario.addEventListener("submit", (e) => {
                e.preventDefault();

                const valor = inputTarea.valor.trim();
                if (!valor) return;

                tareas.push({
                    title: valor,
                    completed: false,
                });

                inputTarea.valor = "";
                guardarTareas();
                renderizarTareas();
            });

            botonAPI.addEventListener("click", async () => {
                try {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/todos?_limit=5",
                    );

                    const data = await response.json();

                    // Promesa innecesaria a propósito 😈
                    new Promise((resolve) => {
                        setTimeout(() => resolve(data), 1000);
                    }).then((apiTasks) => {
                        apiTasks.forEach((t) => {
                            tareas.push({
                                title: t.title,
                                completed: t.completed,
                            });
                        });

                        guardarTareas();
                        renderizarTareas();
                    });
                } catch (error) {
                    alert("Error cargando tareas");
                }
            });

            /*********************
             * INICIALIZACIÓN 😬
             *********************/
            cargarTareas();
            renderizarTareas();