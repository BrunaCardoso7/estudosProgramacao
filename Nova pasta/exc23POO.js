// Crie uma classe Pessoa que tenha as propriedades nome e idade.
//  Crie um método saudacao() que retorne uma saudação personalizada com o nome da pessoa e a idade.
class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    saudacao(){
        return `Hello my name is ${this.nome} and i have ${this.idade} year`
    }
}
let bruna = new pessoa("bruna", 18)
console.log(bruna.saudacao())