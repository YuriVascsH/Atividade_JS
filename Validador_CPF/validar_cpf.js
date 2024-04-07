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

//Multiplicação dos números:
number_string.split("").forEach((value, index) => {
  numeros.push(value * multiplicador);
  multiplicador--;
});
//Calculo:
numeros.forEach((numero) => {
  result += numero;
});
result *= 10;

let restante = result % 11;

//Resultado do primeiro dígito:
const addZeroOuRestante = (restante) => {
  if (restante > 9) {
    number_solto.push(0);
    console.log(`O primeiro dígito de seu CPF é: 0`);
  } else {
    number_solto.push(restante);
    console.log(`O primeiro dígito de seu CPF é: ${restante}`);
  }
};

addZeroOuRestante(restante);

//Segundo dígito:
let novos_numeros = [];
number_solto.forEach((value, index) => {
  novos_numeros.push(value * segundo_multiplicador);
  segundo_multiplicador--;
});

let soma = novos_numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);
let segundo_resto = (soma * 10) % 11;

// Resultado do segundo dígito:
const addZeroOuSegundoResto = (segundo_resto) => {
  if (segundo_resto > 9) {
    number_solto.push(0);
    console.log(`O segundo dígito de seu CPF é: 0`);
  } else {
    number_solto.push(segundo_resto);
    console.log(`O segundo dígito de seu CPF é: ${segundo_resto}`);
  }
};

addZeroOuSegundoResto(segundo_resto);

console.log(`O seu cpf é ${number_solto}`);
