import { printUsers } from "./dom.js";

async function loadUsers() {
    const response = await fetch("https://spapi.dev/api/characters");
    const json = await response.json();

    // La API devuelve los personajes en json.data
    return json.data;
}

async function showUsers() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const characters = await loadUsers();

    // Convertimos personajes a formato "users"
    const users = characters.map((c) => ({
        name: c.name,
        username: `ID ${c.id}`,
        email: `Ocupación: ${c.occupation}`,
        phone: `Edad: ${c.age}`,
        website: `Voz: ${c.voiced_by}`,
        address: {
            street: `Sexo: ${c.sex}`,
            suite: `Cabello: ${c.hair_color}`,
            city: `Religión: ${c.religion}`,
            zipcode: `URL: ${c.url}`,
        },
        company: {
            name: "South Park",
            catchPhrase: "Character",
            bs: `Actualizado: ${c.updated_at}`,
        },
    }));

    printUsers(users);
}

const showUsersBtn = document.getElementById("showUsersBtn");
showUsersBtn.addEventListener("click", showUsers);