// Crie uma classe Produto que tenha as propriedades nome, preco e quantidade. Crie um método calcularValorTotal() 
// que retorne o valor total do produto (preço multiplicado pela quantidade).
class produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorTotal(){
        return this.preco * this.quantidade
    }
}
let caneta = new produto("caneta", 2, 10)
console.log(caneta.calcularValorTotal())