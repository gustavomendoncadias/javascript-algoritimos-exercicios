function calcularSalario() {
    var valorHora = prompt("Digite quanto você ganha por hora:");
    var horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês:");
    
    var salarioBruto = valorHora * horasTrabalhadas;
    var impostoRenda = salarioBruto * 0.11;
    var inss = salarioBruto * 0.08;
    var sindicato = salarioBruto * 0.05;
    
    var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;
    
    alert("Seu salário bruto é: R$" + salarioBruto);
    alert("Valor pago ao IR: R$" + impostoRenda);
    alert("Valor pago ao INSS: R$" + inss);
    alert("Valor pago ao sindicato: R$" + sindicato);
    alert("Seu salário líquido é: R$" + salarioLiquido);
}

calcularSalario();
