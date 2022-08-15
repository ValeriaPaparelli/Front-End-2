let body = document.querySelector("body");

let titulo = document.querySelector("h1");

let items = document.getElementsByClassName("item");

let itemTitulo = document.querySelectorAll("h2");

let itemTexto = document.querySelectorAll("p");

let btnDark = document.querySelector(".btn");
console.log(btnDark);

function darkMode() {
  body.classList.toggle("darkMode");
  titulo.classList.toggle("darkModeTitulo");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle("darkModeItem");
    itemTitulo[i].classList.toggle("darkModeItemTexto");
    itemTexto[i].classList.toggle("darkModeItemTexto");
  }
  btnDark.classList.toggle("btnClaro");
}
