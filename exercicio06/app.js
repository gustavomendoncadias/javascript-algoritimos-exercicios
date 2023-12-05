// Solicita ao usuário o valor ganho por hora e o número de horas trabalhadas
var valorPorHora = prompt("Quanto você ganha por hora?");
var horasTrabalhadas = prompt("Quantas horas você trabalha?");

// Converte os valores de string para float
valorPorHora = parseFloat(valorPorHora);
horasTrabalhadas = parseFloat(horasTrabalhadas);

// Calcula o salário
var salario = valorPorHora * horasTrabalhadas;

// Exibe o salário
alert("Seu salário é: " + salario);
