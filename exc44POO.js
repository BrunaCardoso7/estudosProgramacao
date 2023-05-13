//Crie uma classe de um sistema de gerenciamento de estoque com métodos para adicionar, remover e buscar produtos. 
// Crie também atributos para armazenar o nome, a descrição, o preço e a quantidade em estoque de cada produto.
class estoque{
    constructor(){
         this.produto = []
    }
    adicionar(nome, preco, quantidade){
        let listaProduto = {}
        listaProduto.nome = nome
        listaProduto.preco = preco
        listaProduto.estoque = quantidade

        return this.produto.push(listaProduto)
    }
    remover(){

    }
    buscar(){

    }
}
let leite = new estoque()
leite.adicionar("leite", 10.00, 20)
for(c of this.produto){
    console.log(c)
}