let name = "Taro";   //Definir nombre de variable
console.log( "Hola, Sr. "+name );  //Se hace referencia al nombre de la variable.
greeting(); // Llamada antes de la declaración

function greeting() {
  console.log("Buenas tardes.");
}
let firstName = "Taro";

let number = 1; //número fuera del bloque
{
  let number = 2; //Número en bloque
  console.log(number);
}
console.log(number);
console.log(0b100); //Binario con 0b al principio.
console.log(0o100);  //Octal con un cero al principio.
console.log(0x100);  //Sistema hexadecimal con 0x al principio.
console.log(5 / 2);
console.log(7 % 2); //a % b	El remanente de a dividido por b
console.log(5 % 1.5); 
let num = 10;
num += 5; //Sustituye el número por 10 más 5.
console.log(num);
let a = 1;
console.log(++a); //Aumenta el valor de a en 1 y luego evalúa el valor de a para que sea 2
console.log(a++); //El valor de a se incrementa en 1 después de la evaluación, por lo que permanece en 2.
console.log(a++); //3 se valora como se ha incrementado en 1 arriba y luego se incrementa en 1.
let b = 5;
console.log(--b); //Reducir el valor de a en 1 y luego evaluar el valor de a, por lo que se convierte en 4
console.log(b--); //El valor de a se reduce en 1 después de evaluar el valor de a, por lo que se queda en 4.
console.log(b--); //4 se valora en 4 porque se reduce en 1 arriba, y luego se reduce en 1
for(let num = 1; num < 5; num++) {
  console.log(num);
}
let nume = 10 * 5 + 1; // 10 * +1 después de hacer 5
console.log(nume);