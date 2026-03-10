import { getState, setState } from "./state.js";

const URL = "https://rickandmortyapi.com/api/character";

export async function loadUsers() {
    const page = getState("page");
    const res = await fetch(`${URL}?page=${page}`);
    const data = await res.json();

    setState("users", data.results);
    setState("total", data.info.count);
}