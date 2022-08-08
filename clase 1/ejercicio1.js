let array = [1, 2, 4, 8];

let suma = array[0];

for (let i = 1; i < array.length; i++) {
  const element = array[i];
  suma += element;
  console.log(suma);
}
