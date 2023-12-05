// Solicita ao usuário a temperatura em graus Fahrenheit
var fahrenheit = prompt("Digite a temperatura em graus Fahrenheit:");

// Converte a temperatura de string para float
fahrenheit = parseFloat(fahrenheit);

// Converte Fahrenheit para Celsius
var celsius = 5 * ((fahrenheit - 32) / 9);

// Exibe a temperatura em graus Celsius
alert(fahrenheit + " graus Fahrenheit é igual a " + celsius + " graus Celsius.");
