let confirmarCambios = confirm("¿Querés cambiar los estilos del título?");

if (confirmarCambios) {
  let tituloPrincipal = document.querySelector("h1");

  tituloPrincipal.innerHTML = "Diario El Mejor";

  tituloPrincipal.innerHTML += " de todossss";

  let tituloContenido = document.querySelector("h5");

  tituloContenido.innerHTML = "<i>Contenido de la semana</i>";

  tituloContenido.style.color = "grey";
}

let confirmarColorParrafo = confirm("¿Querés cambiar el color del pàrrafo 1?");

if (confirmarColorParrafo) {
  let parrafo = document.querySelector("p");
  parrafo.classList.add("clase-parrafo1");
}

let eliminarClase = document.querySelector(".diferente");

eliminarClase.classList.remove("diferente");
