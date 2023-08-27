//* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

console.log("============== EJERCICIO 1: Par o Impar ==============");

function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}

parImpar(10);
parImpar(25);
parImpar(32);
parImpar(11);

//* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

console.log("============== EJERCICIO 2: Mayor, Menor o Igual ==============");

function mayorMenorIgual(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log(`${num1} y ${num2} son iguales`);
  }
}

mayorMenorIgual(1, 6);
mayorMenorIgual(10, 15);
mayorMenorIgual(16, 2);
mayorMenorIgual(7, 7);

//* 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

console.log("============== EJERCICIO 3: Múltiplo de 5 ==============");

function multiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(`${numero} es múltiplo de 5`);
  } else {
    console.log(`${numero} no es múltiplo de 5`);
  }
}

multiploDeCinco(20);
multiploDeCinco(33);
multiploDeCinco(12);
multiploDeCinco(15);
multiploDeCinco(155);

//* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

console.log(
  "============== EJERCICIO 4: Imprimir numeros hasta un numero indicado =============="
);

function listaDeNumeros(numero) {
  for (i = 0; i <= numero; i++) {
    console.log(i);
  }
}

listaDeNumeros(10);
console.log("--------------------");
listaDeNumeros(20);
console.log("--------------------");
listaDeNumeros(5);

//* 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

console.log("============== EJERCICIO 5: Repetir una palabra ==============");

function repetirPalabra(palabra, vecesRepetida) {
  for (i = 1; i <= vecesRepetida; i++) {
    console.log(palabra);
  }
}

repetirPalabra("hola", 5);
repetirPalabra("messi", 10);
repetirPalabra("adios", 2);

//* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

console.log(
  "============== EJERCICIO 6: Imprimir valores del array =============="
);

const frutas = ["Banana", "Manzana", "Pera", "Sandía", "Frutilla", "Naranja"];

function nombrarFrutas(array) {
  for (fruta of array) {
    console.log(fruta);
  }
}

nombrarFrutas(frutas);

//* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

console.log(
  "============== EJERCICIO 7: Imprimir array menos la 5ta posición =============="
);

const numeros = [1, 5, 20, 19, 18, 24, 56, 1000, 25, 166];

function arrayDeNumeros(array) {
  for (numero of array) {
    if (numero == array[4]) {
      continue;
    } else {
      console.log(numero);
    }
  }
}

arrayDeNumeros(numeros);

//* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

console.log(
  "============== EJERCICIO 8: Multiplicar Número de un Array =============="
);

numerosArray = [1, 5, 23, 6, 9, 10];

function multiplicarNumero(array, multiplicador) {
  for (numero of array) {
    console.log(numero * multiplicador);
  }
}

multiplicarNumero(numerosArray, 2);
console.log("--------------");
multiplicarNumero(numerosArray, 3);
console.log("--------------");
multiplicarNumero(numerosArray, 5);
console.log("--------------");
multiplicarNumero(numerosArray, 10);
