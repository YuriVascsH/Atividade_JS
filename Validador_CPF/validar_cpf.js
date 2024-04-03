//CPF para ser analisado 746.824.890-70:
// 70, 36, 48, 56, 12, 20, 32, 27, 0

console.log("-----VALIDADOR CPF-----");

let multiplicador = 10;
let numeros = [];
//Adicionar CPF:
let number_string = prompt(
  "Digite os 9 primeiros dígitos de seu CPF:(Sem caractreres especiais):"
);
let number_solto = number_string.split("");
console.log(number_solto);
//Multiplicação dos números
for (let indice = 0; indice < number_string.length; indice++) {
      numeros.push(number_solto[indice] * multiplicador);
      multiplicador--;
  }
  console.log(numeros);
