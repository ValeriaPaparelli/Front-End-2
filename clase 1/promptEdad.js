//let edad = parseInt(prompt("Ingrese su edad"));

//console.log("Usted nació en el año: " + (2022 - edad));

/* let edad = parseInt(prompt("Ingrese su edad"));
if (edad > 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
} */

let edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad)) {
  alert("Debe ingresar un número");
} else if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("Usted es menor de edad");
}
