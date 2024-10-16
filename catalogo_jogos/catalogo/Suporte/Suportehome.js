const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});


const categoriasButton = document.getElementById("botao-categorias");
const categoriasLista = document.getElementById("categorias-lista");

categoriasButton.addEventListener("click", () => {
  categoriasLista.classList.toggle("hidden");
});

function volta () {
  history.back();
}