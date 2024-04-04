//CPF para ser analisado 746.824.890-70:
// 70, 36, 48, 56, 12, 20, 32, 27, 0
// 77, 40, 54, 64, 24, 40, 36, 0, 14
console.log("-----VALIDAR CPF-----");
//Declaração:
let result = 0;
let multiplicador = 10;
let segundo_multiplicador = 11;
let numeros = [];

//Adicionar CPF:
let number_string = prompt(
  "Digite os 9 primeiros dígitos de seu CPF:(Sem caractreres especiais):"
);
let number_solto = number_string.split("");
console.log(number_solto);

//Multiplicação dos números:
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
//Resultado:
if (restante > 9) {
  number_solto.push(0);
  console.log(`O primeiro dígito de seu CPF é: 0`);
} else {
  number_solto.push(restante);
  console.log(`O primeto digito de seu CPF é: ${restante}`);
}

console.log(number_solto)

//Segundo dígito:
// Alterar a questão do array:

let novos_numeros = [];
for (let indice = 0; indice < number_solto.length; indice++) {
  novos_numeros.push(number_solto[indice] * segundo_multiplicador);
  segundo_multiplicador--;
}
console.log(novos_numeros)


//Nova idéia:

console.log('-----VALIDAR CPF-----');
//Declaração:
let result = 0;
let multiplicador = 10;
let segundo_multiplicador = 11;
let numeros = [];

//Adicionar CPF:
let number_string = prompt(
  "Digite os 9 primeiros dígitos de seu CPF:(Sem caractreres especiais):"
);
let number_solto = number_string.split("");

//Multiplicação dos números:
for (let indice = 0; indice < number_string.length; indice++) {
  numeros.push(number_solto[indice] * multiplicador);
  multiplicador--;
}

for (const numero of numeros) {
  result += numero;
}
result *= 10;
let restante = result % 11;

//Resultado:
if (restante > 9) {
  number_solto.push(0);
  console.log(`O primeiro dígito de seu CPF é: 0`);
} else {
  number_solto.push(restante);
  console.log(`O primeiro dígito de seu CPF é: ${restante}`);
}

//Segundo dígito:
let novos_numeros = [];
for (let indice = 0; indice < number_solto.length; indice++) {
  novos_numeros.push(number_solto[indice] * segundo_multiplicador);
  segundo_multiplicador--;
}

let soma = novos_numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
let segundo_resto = (soma * 10) % 11;

// Resultado do segundo dígito:
if (segundo_resto > 9) {
  number_solto.push(0);
  console.log(`O segundo dígito de seu CPF é: 0`);
} else {
  number_solto.push(segundo_resto);
  console.log(`O segundo dígito de seu CPF é: ${segundo_resto}`);
}

console.log(number_solto);
