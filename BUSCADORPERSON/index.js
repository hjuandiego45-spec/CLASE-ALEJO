

const users = [
  { id: 1, name: "Alejandro Gómez", email: "alejandro.gomez@example.com" },
  { id: 2, name: "María Fernanda López", email: "maria.lopez@example.com" },
  { id: 3, name: "Carlos Andrés Ruiz", email: "carlos.ruiz@example.com" },
  { id: 4, name: "Laura Daniela Martínez", email: "laura.martinez@example.com" },
  { id: 5, name: "Juan Sebastián Torres", email: "juan.torres@example.com" }
];
function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);

      if (user) resolve(user);
      else reject(new Error("No existe un usuario con ese ID 🤦‍♂️"));
    }, 2000);
  });
}

const botonBuscar = document.getElementById("buscar");
const contenedorNotas = document.getElementById("notas");
const estado = document.getElementById("estado");
const spinner = document.getElementById("spinner");

function setCargando(estaCargando) {
  if (estaCargando) {
    estado.textContent = "Cargando, esperando respuesta del servidor 😶‍🌫️";
    spinner.classList.remove("oculto");
    botonBuscar.disabled = true;
  } else {
    spinner.classList.add("oculto");
    botonBuscar.disabled = false;
  }
}

function crearTarjetaUsuario(user) {
  const nota = document.createElement("div");
  nota.classList.add("nota", "liquid-glass");

  nota.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>ID</strong> ${user.id}</p>
    <p><strong>Email</strong> ${user.email}</p>
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

  return nota;
}

botonBuscar.addEventListener("click", () => {
  const idIngresado = Number(document.getElementById("userId").value);

  if (!idIngresado) {
    estado.textContent = "Escribe un ID válido, por ejemplo 1";
    return;
  }

  setCargando(true);

  buscarUsuarioPorId(idIngresado)
    .then((user) => {
      estado.textContent = "Usuario encontrado, aquí está su información 😊";
      const tarjeta = crearTarjetaUsuario(user);
      contenedorNotas.appendChild(tarjeta);
    })
    .catch((error) => {
      estado.textContent = `Error, ${error.message}`;
    })
    .finally(() => {
      setCargando(false);
      document.getElementById("userId").value = "";
    });
});
