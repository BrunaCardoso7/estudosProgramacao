// Imagine que você está criando um programa para uma loja de roupas, 
// onde o usuário pode escolher uma peça de roupa e a quantidade desejada.
// O programa deve calcular o valor total do pedido e exibi-lo ao usuário, juntamente
// com uma mensagem de agradecimento
let lojaRoupa = [
    {roupa: "blusa", preco: 30},
    {roupa: "calça", preco: 80},
    {roupa: "saia", preco: 40}
];

class roupas{
    constructor(roupa, quantidade){
        this.roupa = roupa;
        this.quantidade = quantidade;
    }
    valorTotal(){
        if(this.roupa == "blusa"){
            return `valor total da compra: ${lojaRoupa[0].preco * this.quantidade}RS volte sempre`
        }else if(this.roupa == "calça"){
            return `valor total da compra: ${lojaRoupa[1].preco * this.quantidade}RS volte sempre`
        }else if(this.roupa == "saia"){
            return `valor total da compra: ${lojaRoupa[2].preco * this.quantidade}RS, volte sempre`
        }else{
            return "produto não cadastrado"
        }
    }
}
//instâcias

let blusa = new roupas("blusa", 2)
console.log(blusa.valorTotal())
