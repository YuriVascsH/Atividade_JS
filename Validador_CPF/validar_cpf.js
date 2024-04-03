//CPF para ser analisado 746.824.890-70
console.log("-----VALIDADOR CPF-----");

let i = 10;
let numeros = [];
let number_string = prompt(
  "Digite os 9 primeiros dígitos de seu CPF:(Sem caractreres especiais):"
);

let no = number_string.split("");

for (let indice = 0; indice < number_string; indice++) {
  while (i > 2) {
    numeros.push(no[indice] * i);
    i--;
  }
}
console.log(numeros);
