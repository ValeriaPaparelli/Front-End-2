// Aquí realizamos una consulta de la promesa, esperando su respuesta asíncrona
const obtenerDatos = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //manipulamos la respuesta
      renderizarDatosUsuario(data);
    });
};

const boton = document.getElementById("random");
boton.addEventListener("click", obtenerDatos);

function renderizarDatosUsuario(datos) {
  const { picture, name, email } = datos.results[0];

  const tarjeta = document.querySelector(".tarjeta");

  tarjeta.innerText = "";

  const foto = document.createElement("img");
  foto.setAttribute("src", picture.large);
  tarjeta.appendChild(foto);

  const nombre = document.createElement("h4");
  nombre.innerText = `${name.title} ${name.first} ${name.last}`;
  tarjeta.appendChild(nombre);

  const mail = document.createElement("p");
  mail.innerText = email;
  tarjeta.appendChild(mail);

  /* -------------------------------- CONSIGNA 1 -------------------------------- */
  // Aquí deben desarrollar una función que muestre en pantalla:
  // la foto, el nombre completo del usuario y su email.
  // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
