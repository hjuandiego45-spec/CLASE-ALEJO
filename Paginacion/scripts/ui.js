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
        const page = getState("page");
        await changePage(page - 1);
    });
}

export function addNextPageBtnEvent() {
    const btn = document.getElementById("nextBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        await changePage(page + 1);
    });
}

function getUserCard(user) {
    return `
    <div class="user-card">
        <img class="avatar" src="${user.image}" alt="user image">

        <h2>${user.name}</h2>

        <div class="info">
          <p><strong>Status:</strong> ${user.status}</p>
          <p><strong>Species:</strong> ${user.species}</p>
          <p><strong>Gender:</strong> ${user.gender}</p>
          <p><strong>Origin:</strong> ${user.origin.name}</p>
          <p><strong>Location:</strong> ${user.location.name}</p>
          <p><strong>Episodes:</strong> ${user.episode.length}</p>
        </div>
      </div>`;
}

export function render() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const users = getState("users");
    users.forEach((user) => {
        container.innerHTML += getUserCard(user);
    });
}