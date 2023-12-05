function verificarIdade() {
    var nome = prompt("Digite seu nome:");
    var idade = prompt("Digite sua idade:");
    
    if (idade >= 18) {
        alert("Olá, " + nome + ", pode dirigir");
    } else {
        alert(nome + ", volte em alguns anos");
    }
}

verificarIdade();
