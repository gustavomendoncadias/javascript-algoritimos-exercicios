function calcularPesoIdeal() {
    var altura = prompt("Digite sua altura em metros:");
    var pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é: " + pesoIdeal + " kg");
}

calcularPesoIdeal();
