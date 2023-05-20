// Crie uma classe de um banco com métodos para cadastrar clientes, abrir contas, sacar e depositar dinheiro. 
// Crie também atributos para armazenar o número da conta, o saldo e o tipo de conta (poupança ou corrente).
class banco {
    constructor(numeroConta, saldo = 0, tipoConta){
        this.nome = ''
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.tipoConta = tipoConta
    }
    cadastrarCliente(nome){
        this.nome = nome
        console.log(this.nome)
    }
    abrirConta(){
        console.log(` conta criada\n seu saldo atual: ${this.saldo} reais`)
    }
    sacar(valor){
        console.log(`Você acaba de fazer um saque\n saldo atual: ${this.saldo -= valor} reais`)
    }
    depositar(valor){
        console.log(`Você acaba de fazer um depósito\n saldo atual: ${this.saldo += valor} reais`)
    }
}
let bruna = new banco (1111001, 0, 'poupança')
try{
    bruna.cadastrarCliente("Bruna Fernandes Cardoso")
    bruna.abrirConta()
    bruna.depositar(900)
}finally{
    console.log('operação bem sucedida, conheça nossos planos!')
}