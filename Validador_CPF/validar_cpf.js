//CPF para ser analisado 746.824.890-70:
// 70, 36, 48, 56, 12, 20, 32, 27, 0
//1º Dígito do cpf
console.log("-----VALIDADOR CPF-----");
let result = 0;
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
for (const numero of numeros) {
  result += numero;
}
result *= 10;
restante = result % 11;
console.log(restante);

if (restante > 9) {
  numero.push(0);
  console.log(`O primeiro dígito de seu CPF é: 0`);
} else {
  numeros.push(restante);
  console.log(`O primeto digito de seu CPF é: ${restante}`);
}

console.log(number_string);
