function verificarValor() {
    var valor = prompt("Digite um valor:");
    
    if (valor > 0) {
        alert("O valor é positivo");
    } else if (valor < 0) {
        alert("O valor é negativo");
    } else {
        alert("O valor é zero");
    }
}

verificarValor();
