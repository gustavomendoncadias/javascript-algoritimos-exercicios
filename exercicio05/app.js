// Solicita ao usuário a medida em metros
var metros = prompt("Digite a medida em metros:");

// Converte a medida de string para float
metros = parseFloat(metros);

// Converte metros para centímetros
var centimetros = metros * 100;

// Exibe a medida em centímetros
alert(metros + " metros é igual a " + centimetros + " centímetros.");
