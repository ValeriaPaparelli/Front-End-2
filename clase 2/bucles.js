// FOR IN => Itera sobre objetos

// for (let nombreVariable in objeto) {código que vamos a ejecutar en cada iteración}

let persona = {
  nombre: "Valeria",
  edad: 36,
  profesion: "desarrolladora",
};

//Declaramos una variable => let nombreVariable que toma en cada iteración una a una
//las propiedades del objeto pero no sus valores
//Escribiendo la palabra reservada in hacemos mención al objeto que queremos iterar
//Dentro de las llaves {} escribimos la sentencia de código que deseamos ejecutar en cada iteraciónxº

for (let variableIteradora in persona) {
  console.log(persona[variableIteradora]);
  //Mencionamos el objeto que estamos iterando y usamos los corchetes dentro de los cuáles
  //vamos a escribir la variable iteradora
  //De cada iteración trae del objeto persona el valor de la propiedad mencionada
}

console.log("----------------------------------------------------------");

// FOR OF => Itera sobre arrays

// for (let nombreVariable of array) {código que vamos a ejecutar en cada iteración}

let series = ["Friends", "Games of thrones", "Breaking Bad"];

for (let unaSerie of series) {
  console.log(unaSerie);
  //Declaramos una variable iteradora
  //Escribiendo la palabra reservada of hacemos mención al array que queremos iterar
}
