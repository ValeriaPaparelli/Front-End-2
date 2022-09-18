/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  while (!datosPersona.nombre) {
    datosPersona.nombre = prompt("Ingresa un nombre correcto");
  }
  datosPersona.edad = parseInt(prompt("Ingresa tu año de nacimiento"));
  while (
    !datosPersona.edad ||
    isNaN(datosPersona.edad) ||
    datosPersona.edad <= 1900 ||
    datosPersona.edad >= 2022
  ) {
    datosPersona.edad = parseInt(prompt("Ingresa una fecha correcta"));
  }

  datosPersona.edad = 2022 - datosPersona.edad;
  datosPersona.ciudad = prompt("Ingrese su ciudad");
  while (!datosPersona.ciudad) {
    datosPersona.ciudad = prompt("Ingresa una ciudad correcta");
  }
  datosPersona.interesPorJs = confirm("¿Te interesa Javascript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  if (datosPersona.interesPorJs) {
    document.getElementById("javascript").innerText = "si";
  } else {
    document.getElementById("javascript").innerText = "no";
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const cajas = document.querySelectorAll(".caja");

  if (cajas.length === 0) {
    const fila = document.getElementById("fila");

    listado.forEach((materia) => {
      const divCaja = document.createElement("div");
      divCaja.classList.add("caja");

      const imgCaja = document.createElement("img");
      imgCaja.setAttribute("src", materia.imgUrl);
      imgCaja.setAttribute("alt", materia.lenguajes);

      const parrafoLenguaje = document.createElement("p");
      parrafoLenguaje.classList.add("lenguajes");
      parrafoLenguaje.innerText = materia.lenguajes;

      const parrafoBimestre = document.createElement("p");
      parrafoBimestre.classList.add("bimestre");
      parrafoBimestre.innerText = materia.bimestre;

      divCaja.appendChild(imgCaja);
      divCaja.appendChild(parrafoLenguaje);
      divCaja.appendChild(parrafoBimestre);

      fila.appendChild(divCaja);
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function (e) {
  if (e.key === "f") {
    const sobreMi = document.getElementById("sobre-mi");
    sobreMi.classList.remove("oculto");
  }
});
