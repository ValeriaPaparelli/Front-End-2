let opcionUsuario = ingresarUsuario();
let opcionMaquina = obtenerNumeroAlAzar();

let resultadoUsuario = "No hay resultado";
resultadoUsuario = resultadoJuegoUsuario(opcionUsuario);
resultado();

const obtenerNumeroAlAzar = () => {
  parseInt(Math.random() * 3 + 1);
};

const ingresarUsuario = () => {
  let valorIngresadoUsuario = parseInt(
    prompt("Ingrese una opción: 1-Piedra 2-Papel 3-Tijera")
  );

  while (
    isNaN(
      valorIngresadoUsuario ||
        valorIngresadoUsuario >= 1 ||
        valorIngresadoUsuario <= 3
    )
  ) {
    if (valorIngresadoUsuario == null) {
      return "Debes ingresar un valor";
    }
    return valorIngresadoUsuario;
  }
};

const resultadoJuegoUsuario = (opcionUsuario) => {
  if (opcionMaquina === opcionUsuario) {
    resultadoUsuario = "Empate";
  } else if (opcionUsuario === 1) {
    if (opcionMaquina === 2) {
      resultadoUsuario = "Perdiste";
    } else {
      resultadoUsuario = "Ganaste!";
    }
  } else if (opcionUsuario === 2) {
    if (opcionMaquina === 1) {
      resultadoUsuario = "Ganaste!";
    } else {
      resultadoUsuario = "Perdiste!";
    }
  } else if (opcionUsuario === 3) {
    if (opcionMaquina === 1) {
      resultadoUsuario = "Perdiste!";
    } else {
      resultadoUsuario = "Ganaste!";
    }
  }

  return resultadoUsuario;
};

const resultado = () => {
  alert(
    resultadoUsuario +
      "\n" +
      "La maquina eligió :" +
      opcionMaquina +
      "\n" +
      "Vos elegiste :" +
      opcionUsuario +
      "\n"
  );
};
