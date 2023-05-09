// Imagine que você está criando um programa para uma empresa de delivery de comida.
// O programa deve solicitar ao usuário que informe o endereço de entrega e a lista de produtos desejados, 
// juntamente com suas quantidades. O programa deve calcular o valor total do pedido, incluindo o valor do frete,
// e exibi-lo ao usuário, juntamente com uma mensagem informando o tempo estimado de entrega.
let ifood = [
    {produto: 'refrigerante', valor: 6},
    {produto: 'hamburgue', valor: 10},
    {produto: 'batata frita', valor: 8}
]
class cliente {
    constructor(endereço, clienteProduto, quantidade, frete = 10){
        this.endereco = endereço
        this.clienteProduto = clienteProduto
        this.quantidade = quantidade
        this.frete = frete
    }
    valorTotal(){
        if(this.clienteProduto == "refrigerante"){
            return ifood[0].valor* this.quantidade + this.frete
        }else if (this.clienteProduto == "hamburgue"){
            return ifood[1].valor* this.quantidade + this.frete
        }else if (this.clienteProduto == "batata frita"){
            return ifood[2].valor* this.quantidade + this.frete
        }else {
            return 'produto não encontrado'
        }
    }
}
let batata = new cliente("teresina", "batata frita", 2)
console.log(batata.valorTotal())