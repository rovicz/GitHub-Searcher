import handleDadosGit, { fetchDados } from "./FetchDados.js";

handleDadosGit;
fetchDados;
const input = <any>document.getElementById("searchInput");

const button = document.querySelector("#searchButton");
const content = <HTMLElement>document.getElementById("content");

function handleChange(event: Event) {
  event.preventDefault();

  if ((content.innerHTML = " ")) {
    fetchDados(input.value);
  }
}

button?.addEventListener("click", handleChange);
