function Solicita ao usuário as 4 notas bimestrais
var nota1 = prompt("Digite a primeira nota bimestral:");
var nota2 = prompt("Digite a segunda nota bimestral:");
var nota3 = prompt("Digite a terceira nota bimestral:");
var nota4 = prompt("Digite a quarta nota bimestral:");

// Converte as notas de string para float
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

// Calcula a média
var media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibe a média
alert("A média é: " + media);
