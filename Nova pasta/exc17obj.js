/*Crie um objeto "aluno" com as propriedades "nome", "idade", "nota1" e "nota2". Atribua valores para
 cada uma das propriedades e crie um método que calcule a média das notas do aluno. Exiba a média na tela. */
 let aluno = {
    nome: 'mina',
    idade: 25,
    nota1: 8,
    nota2: 10
 }   
  
 aluno.calcularMedia = function(){
    let media = (this.nota1 + this.nota2)/2
    return media
 }

 console.log(aluno.calcularMedia())
