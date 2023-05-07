// Crie uma classe Agenda que tenha a propriedade contatos que é um array de objetos com as propriedades nome e telefone. Crie 
// métodos adicionarContato(nome, telefone), removerContato(nome) e buscarContato(nome) que adicionem, removam ou busquem um contato na agenda.
class contato{
    constructor(nome, telefone){
        this.nome = nome
        this.telefone = telefone
    }
}
class agenda{
    constructor(){
        this.contatos = []
    }
    adicionarContatos(vlr){
        this.contatos.push(vlr)
    }
}
let bruna = new contato ("burna", 98063735)
this.contatos.adicionarContatos(bruna)
console.log(bruna)