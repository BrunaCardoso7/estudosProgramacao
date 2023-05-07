// Crie uma classe ContaBancaria que tenha as propriedades titular, saldo e limite.
//  Crie métodos sacar(valor) e depositar(valor) 
// que atualizem o saldo da conta bancária e um método consultarSaldo() que retorne o saldo atual.
class ContaBancaria{
    constructor(titular, saldo, limite){
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
    }
    sacar(vlr){
        return  this.saldo-=vlr
    }
    depositar(vlr){
        return  this.saldo += vlr
    }
    consultarSaldo(vlr){
        return this.saldo
    }
}
let joao = new ContaBancaria("JOão Alves", 1400, 1000)
joao.depositar(500)
joao.sacar(200)
console.log(joao.consultarSaldo())
