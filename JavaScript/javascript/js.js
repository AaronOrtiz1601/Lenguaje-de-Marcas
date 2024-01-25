
//1. Escribe un script que muestre tu nombre y el curso y el campo de la informática donde te gustaría trabajar.
alert("Hola me llamo Aarón Ortiz, estoy en 1ºDam y quiero trabajar programando aplicaciones");
//2. Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero.
let suma = 0;
let numero;

do {
    numero = parseInt(prompt("Introduce un número (introduce 0 para terminar):"));
    suma += numero;
} while (numero !== 0);

alert("La suma de los números introducidos es: " + suma);

//3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo por pantalla completo. Por ejemplo, introduzco el 1, 2, 3 y 4. El resultado es 1234.
// Lee los 4 valores numéricos individualmente
let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
let num3 = prompt("Introduce el tercer número:");
let num4 = prompt("Introduce el cuarto número:");



// Muestra el número completo por pantalla
alert(" el resultado es "+ num1 +num2 + num3 +num4);
//4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. Por ejemplo, un 7.2 es notable.
let num5 = prompt("Introduce la nota del alumno");

// Convertir el valor a número para comparaciones
num5 = parseFloat(num5);

if (num5 >= 0 && num5 <= 4.9) {
    alert("La nota es un suspenso");
} else if (num5 >= 5 && num5 <= 6.9) {
    alert("La nota es un suficiente");
} else if (num5 >= 7 && num5 <= 8.9) {
    alert("La nota es un notable");
} else if (num5 >= 9 && num5 <= 10) {
    alert("La nota es un sobresaliente");
}
//5. Introducir 10 valores en un array, mostrar la suma de sus valores, el mayor valor, el menor valor y la media de los valores.
// Definir un array para almacenar los 10 valores
let valores = [];

// Introducir 10 valores en el array
for (let i = 1; i <= 10; i++) {
  let valor = parseFloat(prompt("Introduce el valor " + i + ":"));
  valores.push(valor);
}

// Calcular la suma de los valores
let suma2 = 0;
for (let i = 0; i < valores.length; i++) {
  suma += valores[i];
}

// Calcular el mayor y el menor valor
let mayor = Math.max(...valores);
let menor = Math.min(...valores);

// Calcular la media de los valores
let media = suma / 10;

// Mostrar los resultados por consola
alert("La suma de los valores es: " + suma);
alert("El mayor valor es: " + mayor);
alert("El menor valor es: " + menor);
alert("La media de los valores es: " + media);
//6. Rellenar un array con valores aleatorios mediante una función matemática de 20 elementos tipo entero entre el 10 y el 20. El programa tendrá que mostrar el total de valores mayores que 15, menores que 15 e iguales a 15.
// Función para generar un valor aleatorio entre un rango dado
function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Crear un array para almacenar los 20 valores
  let valores2 = [];
  
  // Llenar el array con valores aleatorios entre 10 y 20
  for (let i = 0; i < 20; i++) {
    valores.push(generarAleatorio(10, 20));
  }
  
  // Contar cuántos valores son mayores, menores o iguales a 15
  let mayoresQue15 = 0;
  let menoresQue15 = 0;
  let igualesA15 = 0;
  
  valores.forEach(function(valor) {
    if (valor > 15) {
      mayoresQue15++;
    } else if (valor < 15) {
      menoresQue15++;
    } else {
      igualesA15++;
    }
  });
  
  // Mostrar los resultados por consola
  alert("Total de valores mayores que 15: " + mayoresQue15);
  alert("Total de valores menores que 15: " + menoresQue15);
  alert("Total de valores iguales a 15: " + igualesA15);

//Opcional:
//6. Introducir 10 valores en una línea separada por espacios en blancos. En un array deben de 
//introducirse los valores pares y en otro los impares. Por ejemplo:
//Entrada: 123 5 22 68 90 12 654 112 47 899
//Resultado:
//Pares: 22, 68, 90, 12, 654, 112
//Impares: 123, 5, 47, 899