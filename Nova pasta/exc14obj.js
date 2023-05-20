/*Crie um objeto "livro" com as propriedades "título", "autor" e "ano de publicação".*/
/*Adicione um método "informações" ao objeto livro que retorne uma string com todas as propriedades do livro.*/

let livro = {
    titulo: 'A pedra filosofal',
    autor: 'J.K Rowling',
    ano: 1997
    
}
livro.informações = function(){
    return livro.titulo + " " + this.autor +" " + this.ano
}
console.log(livro.informações())