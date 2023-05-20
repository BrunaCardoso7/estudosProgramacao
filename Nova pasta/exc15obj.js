/*Crie outro objeto "pessoa" com as propriedades "nome" e "sobrenome".*/
/*Adicione um método "nome completo" ao objeto pessoa que retorne a concatenação do nome e sobrenome da pessoa.*/
/*Crie uma função "maiorDeIdade" que receba um objeto "pessoa" como parâmetro e 
retorne true se a pessoa tiver idade maior ou igual a 18 anos, e false caso contrário.*/ 
let pessoa = {
    nome: ' bruna',
    sobrenome: 'cardoso',
    idade: 20
}
pessoa.nomeCompleto = function(){
    return this.nome +" "+ this.sobrenome
}
function maiordeIdade (pessoa) {
    if (pessoa.idade >= 18){
        return pessoa.idade +' maior de idade'
    }else if (pessoa.idade < 18){
        return pessoa.idade + ' menor de idade'
}
}
console.log(maiordeIdade(pessoa))
