import handleDadosGit, { fetchDados } from "./FetchDados.js";
handleDadosGit;
fetchDados;
const input = document.getElementById("searchInput");
const button = document.querySelector("#searchButton");
const content = document.getElementById("content");
function handleChange(event) {
    event.preventDefault();
    if ((content.innerHTML = " ")) {
        fetchDados(input.value);
    }
}
button?.addEventListener("click", handleChange);
//# sourceMappingURL=main.js.map