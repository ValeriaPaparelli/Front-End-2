const cancelarEnvio = true;

const form = document.querySelector("form"); //Obtenemos el formulario
form.addEventListener("submit", (event) => {
  //Queremos escuchar el método submit, y se va a ejecutar una función cuando se escuche este evento
  if (cancelarEnvio) {
    console.log("lo manejo yo!");
    event.preventDefault();
  }
});

const input = document.querySelector('input[name="nombre"]'); //Un input que tenga la propiedad name con el valor nombre
input.addEventListener("invalid", (event) => {
  //Escucho el evento del input cuando el valor sea inválido, ahí se ejecuta la función
  event.preventDefault();
  if (
    event.target.validity.valueMissing && //Pregunto si la validación de ese input es que falta el valor
    !document.querySelector('input[name="nombre"]+span.error')
  ) {
    let errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "Por favor, ingrese un valor válido";
    input.insertAdjacentElement("afterend", errorElement);
  }
});

//Método setCustomValidity('mensaje') => Sobreescribimos el mensaje al cartel que ya tiene uno por defecto
