const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  const mail = document.getElementById("email-input").value;
  console.log(mail);
  // 2. Obtenemos los datos ingresados en el input de password
  const password = document.getElementById("password-input");
  console.log(password);
  // 3. Obtenemos el valor del input radio
  const inputsRadio = document.getElementsByName("legalAge");
  inputsRadio.forEach(function (inputRadio) {
    if (inputRadio.checked) {
      console.log(inputRadio.value);
    }
  });
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
});
