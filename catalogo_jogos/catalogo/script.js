const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// evento de clique no texto menu para abrir o menu
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const menuImage = document.getElementById("menuimg");

// Evento de clique na imagem para abrir o menu
menuImage.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const categoriasButton = document.getElementById("botao-categorias");
const categoriasLista = document.getElementById("categorias-lista");

categoriasButton.addEventListener("click", () => {
  categoriasLista.classList.toggle("hidden");
});