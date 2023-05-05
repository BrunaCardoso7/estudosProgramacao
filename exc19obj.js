/*Crie um objeto "funcionário" com as propriedades "nome", "salário" e "cargo". 
Atribua valores para cada uma das propriedades e crie um método que calcule o salário líquido do funcionário,
subtraindo do salário bruto o valor do imposto de renda (considere uma alíquota de 10%). 
Exiba o salário líquido na tela. */
let funcionario = {
    nome: 'rebeca',
    salario: 3000,
    cargo: 'desenvolvedora'
}
funcionario.salarioLiquido = function(){
    let imposto = (this.salario * 10)/100
    let liquido = this.salario - imposto
    return liquido
}
console.log(funcionario.salarioLiquido())