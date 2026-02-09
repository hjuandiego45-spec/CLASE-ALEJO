const botonAgregar = document.getElementById("agregar");
const contenedorNotas = document.getElementById("notas");

botonAgregar.addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;

    if (titulo === "" || contenido === "") return;

    const nota = document.createElement("div");
    nota.classList.add("nota");

    nota.innerHTML = `
        <h3>${titulo}</h3>
        <p>${contenido}</p>
        <div class="iconos">
            <span class="estrella">☆</span>
            <span class="eliminar">🗑</span>
        </div>
    `;

    const estrella = nota.querySelector(".estrella");
    const eliminar = nota.querySelector(".eliminar");

    estrella.addEventListener("click", () => {
        nota.classList.toggle("importante");
        estrella.textContent = nota.classList.contains("importante") ? "★" : "☆";
    });

    eliminar.addEventListener("click", () => {
        nota.remove();
    });

    contenedorNotas.appendChild(nota);

    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
});
