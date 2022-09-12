/* consultarDatos, es una función que inmediatamente al ejecutarse, debe mostrar en el 
div "estado" el mensaje "Procesando los datos...". 

Y luego de 2000 ms, debe renderizar en el div "resultado", el siguiente texto:
"Saldo: Usted tiene $___ pesos." Además debe borrar el texto "Procesando los datos..."

Bonus: En la misma función, hacer que luego de 3000ms, agregar en el mismo div "resultado" 
el siguiente texto: "Deudas: Usted no tiene deudas pendientes."

Utilicen setTimeout(funcion() { // Esta es la función que se va a ejecutar }, tiempoenms )
  
  setTimeout(function() {
    console.log('hola');
  }, 3000) */

const estado = document.getElementById("estado");
const resultado = document.getElementById("resultado");

function consultarDatos() {
  estado.innerText = "Procesando los datos...";

  setTimeout(function () {
    resultado.innerText = "Saldo: Usted tiene $5000 pesos";
    estado.innerText = "";
  }, 2000);

  setTimeout(function () {
    resultado.innerText = "Deudas: Usted no tiene deudas pendientes.";
  }, 3000);
}
