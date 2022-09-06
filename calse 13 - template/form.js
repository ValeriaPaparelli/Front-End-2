/* let campoName = document.getElementById("nombre");
let campoNameError = document.getElementById("nombre-error");
let submitBoton = document.getElementById("submitBoton");
submitBoton.setAttribute("disabled", true);

campoName.addEventListener("keyup", (e) => {
  if (e.target.value.length < 3) {
    campoName.classList.add("error");
    campoNameError.classList.remove("hide");
    submitBoton.setAttribute("disabled", true);
  } else {
    campoName.classList.remove("error");
    campoNameError.classList.add("hide");
    submitBoton.removeAttribute("disabled", true);
  }
});

let campoPass = document.getElementById("pass");

let campoTel = document.getElementById("tel"); */

const campoName = document.getElementById("nombre");
const campoPass = document.getElementById("pass");

const ingresante = {
  nombre: "",
  pass: "",
  tel: "",
  hobbies: [],
  paisNacimiento: "",
};

const validarFormulario = () => {
  let hayErrores = true;
  if (ingresante.nombre.length < 3) {
    campoName.classList.add("error");
    hayErrores = true;
    console.log(campoName);
  } else {
    campoName.classList.remove("error");
    hayErrores = false;
  }

  if (ingresante.pass.length < 3) {
    campoPass.classList.add("error");
    hayErrores = true;
  } else {
    campoPass.classList.remove("error");
    hayErrores = false;
  }

  if (hayErrores) {
    submitBoton.setAttribute("disabled", true);
  } else {
    submitBoton.removeAttribute("disabled", true);
  }
};

const form = document.querySelector("form");

form.addEventListener("keyup", function () {
  const formInscripcion = new FormData(this);

  ingresante.nombre = formInscripcion.get("nombre");
  ingresante.pass = formInscripcion.get("pass");
  ingresante.hobbies = formInscripcion.getAll("hobbies");
  ingresante.paisNacimiento = formInscripcion.get("nacionalidad");

  validarFormulario();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log({ ingresante });
});
