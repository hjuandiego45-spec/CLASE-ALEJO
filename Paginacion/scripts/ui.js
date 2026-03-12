import { getState, setState } from "./state.js";
import { loadUsers } from "./service.js";

async function changePage(newPage) {
  if (newPage < 1) return;

  const total = getState("total");
  const limit = getState("limit");
  const maxPages = Math.ceil(total / limit);

  if (newPage > maxPages) return;

  setState("page", newPage);
  await loadUsers();
  render();
}

export function addPrevPageBtnEvent() {
  const btn = document.getElementById("prevBtn");

  btn.addEventListener("click", async () => {
    const currentPage = getState("page");
    await changePage(currentPage - 1);
  });
}

export function addNextPageBtnEvent() {
  const btn = document.getElementById("nextBtn");

  btn.addEventListener("click", async () => {
    const currentPage = getState("page");
    await changePage(currentPage + 1);
  });
}

function getUserCard(user) {
  return `
    <div class="user-card">
      <img class="avatar" src="${user.image}" alt="${user.name}">
      <h2>${user.name}</h2>

      <div class="info">
        <p><strong>Estado:</strong> ${translateStatus(user.status)}</p>
        <p><strong>Especie:</strong> ${translateSpecies(user.species)}</p>
        <p><strong>Género:</strong> ${translateGender(user.gender)}</p>
        <p><strong>Origen:</strong> ${translateText(user.origin.name)}</p>
        <p><strong>Ubicación:</strong> ${translateText(user.location.name)}</p>
        <p><strong>Episodios:</strong> ${user.episode.length}</p>
      </div>
    </div>
  `;
}

function translateStatus(status) {
  if (status === "Alive") return "Vivo";
  if (status === "Dead") return "Muerto";
  return "Desconocido";
}

function translateGender(gender) {
  if (gender === "Male") return "Masculino";
  if (gender === "Female") return "Femenino";
  if (gender === "Genderless") return "Sin género";
  return "Desconocido";
}

function translateSpecies(species) {
  if (species === "Human") return "Humano";
  if (species === "Alien") return "Alienígena";
  return species;
}

function translateText(text) {
  return text
    .replace("Earth", "Tierra")
    .replace("Replacement Dimension", "Dimensión de Reemplazo");
}

function renderPagination() {
  const page = getState("page");
  const total = getState("total");
  const limit = getState("limit");
  const totalPages = Math.ceil(total / limit);

  const info = document.getElementById("info-pagina");
  const controls = document.getElementById("controles-paginacion");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  info.textContent = `Página ${page} de ${totalPages}`;
  controls.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === page) {
      btn.classList.add("activo");
    }

    btn.addEventListener("click", async () => {
      setState("page", i);
      await loadUsers();
      render();
    });

    controls.appendChild(btn);
  }

  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
}

export function render() {
  const container = document.getElementById("container");
  const users = getState("users");

  container.innerHTML = "";

  users.forEach((user) => {
    container.innerHTML += getUserCard(user);
  });

  renderPagination();
}