

//ejercicio 1
let numeros = {
    1: "primero",
    2: "segundo",
    3: "tercero",
    4: "cuarto",
    5: "quinto",
    6: "sexto",
    7: "séptimo",
    8: "octavo",
    9: "noveno",
    10: "décimo"
  };
  
 
  let prueba = false;
  let numeroIngresado = prompt("Introduce un número del 1 al 10 para obtener su formato cardinal");
  
  do
  {
   
    for (let key in numeros) {
    if (key === numeroIngresado) {
      alert(numeros[key]);
      numeroIngresado = prompt("Introduce un número del 1 al 10 para obtener su formato cardinal");
      prueba = true;
      
    }else{
      prueba = false;
    }
    
  }
}while(prueba == true);
  
//ejercicio 2
alert ( "Introduce dos numeros, te dire su suma y el valor de esta en binario y hexadecimal");
let numero1 = parseInt(prompt("Primer número"));
let numero2 = parseInt(prompt("Segundo número"));
let suma = numero1 + numero2;
  let  {Binario, Hexadecimal} =
  {
      Binario :suma.toString(2),
      Hexadecimal: suma.toString(16)
      
  }

alert (Binario);
alert(Hexadecimal);
// ejercicio 4
let cadena1 = prompt("Introduce la primera cadena:");
let cadena2 = prompt("Introduce la segunda cadena:");

let subcadena = cadena1.includes(cadena2) ? "La segunda cadena es subcadena de la primera" : "La segunda cadena no es subcadena de la primera";
let longitudCadena1 = cadena1.length;
let longitudCadena2 = cadena2.length;


for (let i = 0 ; i< longitudCadena1 ; i++)
{
  if (cadena1.charAt(i) == 'a' || cadena1.charAt(i) == 'e' || cadena1.charAt(i) == 'i' || cadena1.charAt(i) == 'o' || cadena1.charAt(i) == 'u')
  {
    cadena1 = cadena1.toUpperCase(cadena1.charAt(i));
  }
}
for (let i = 0 ; i< longitudCadena2 ; i++)
{
  if (cadena2.charAt(i) == 'a' || cadena2.charAt(i) == 'e' || cadena2.charAt(i) == 'i' || cadena2.charAt(i) == 'o' || cadena2.charAt(i) == 'u')
  {
    cadena2 = cadena2.toUpperCase(cadena2.charAt(i));
  }
}

if (longitudCadena1 > 5) {
  cadena1 = cadena1.slice(0, 5) + "...";
}

if (longitudCadena2 > 5) {
  cadena2 = cadena2.slice(0, 5) + "...";
}

alert(subcadena);
alert("La cadena 1 tiene " + longitudCadena1 + " caracteres y la segunda " + longitudCadena2 + " caracteres");
alert(cadena1);
alert(cadena2);
// ejercicio 5

function potencia (base,exponente) 
{
  let resultado = 1;
  for (let i = 0; i < exponente; i++)
  {
    resultado = resultado * base;
  }
  return resultado;
}
alert("Dime una base y un exponente y yo te calculare su potencía");
let base = parseInt(prompt("Dime la base que quieres usar"));
let exponente = parseInt(prompt("Dime el exponente  que quieres usar"));
if (base >0 && exponente >0)
{
  alert("El resultado de esa potencia es " + potencia(base,exponente));
} else
{
  alert("La base y el exponente tienen que ser positivos");
}
// ejercicio 6
// Definir una función flecha para mostrar la tabla de multiplicar
let mostrarTabla = (numero, inicio, fin) => {
  for (let i = inicio; i <= fin; i++) {
    alert(numero + " * " + i + " = " + (numero * i));
  }
}

// Pedir al usuario que introduzca un número
let continuar = true;
let inicio = 1;
  let fin = 10;
let numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar:"));
do {
  mostrarTabla(numero, inicio, fin);
  inicio += 10;
  fin += 10;
  continuar = confirm("¿Desea continuar mostrando la tabla de multiplicar con otro número?");
} while (continuar);

 
