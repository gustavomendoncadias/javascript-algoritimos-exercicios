function Solicita ao usuário dois números
var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");

// Converte os números de string para float
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Calcula a soma
var soma = numero1 + numero2;

// Exibe a soma
console.log("A soma é: " + soma);
