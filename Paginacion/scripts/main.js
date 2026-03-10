import { loadUsers } from "./service.js";
import { addPrevPageBtnEvent, addNextPageBtnEvent, render } from "./ui.js";

async function startApp() {
    addPrevPageBtnEvent();
    addNextPageBtnEvent();
    await loadUsers();
    render();
}

startApp();