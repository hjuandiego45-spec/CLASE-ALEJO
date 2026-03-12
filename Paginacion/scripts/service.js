import { getState, setState } from "./state.js";

const URL = "https://rickandmortyapi.com/api/character";

export async function loadUsers() {
  try {
    const page = getState("page");
    const response = await fetch(`${URL}?page=${page}`);
    const data = await response.json();

    setState("users", data.results);
    setState("total", data.info.count);
  } catch (error) {
    console.error("Error al cargar personajes:", error);
    setState("users", []);
    setState("total", 0);
  }
}