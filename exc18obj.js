/*Crie um objeto "conta" com as propriedades "saldo" e "limite".
 Atribua valores para cada uma das propriedades e crie um método que permita 
 realizar um saque da conta. O método deve verificar
 se o valor do saque é menor ou igual ao saldo mais o limite. 
 Exiba o novo saldo na tela. */
 let conta = {
    saldo: 1200,
    limite: 1100
 }
 conta.saque = function(vlr){
    if (vlr <= conta.limite){
        this.saldo -= vlr
        return 'saque bem sucedido, seu novo saldo é: ' + this.saldo
    }else if(vlr >conta.limite){
        return 'náo podemos prosseguir o saque, limite indisponível'
    }
 }
 console.log(conta.saque(1000))
 