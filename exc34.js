// Imagine que você está criando um programa para calcular o IMC (Índice de Massa Corporal)
// de uma pessoa. O programa deve solicitar ao usuário que informe sua altura e peso, e em 
// seguida calcular e exibir o seu IMC juntamente com uma mensagem informando se a pessoa está 
// abaixo do peso, com o peso normal ou acima do peso.
class pessoa{
    constructor(nome, altura, peso){
        this.nome = nome
        this.altura = altura;
        this.peso = peso;
    }
    calcularImc(){
        let alturaquadrado = this.altura**2
        return this.peso/alturaquadrado
    }
    verificarImc(){

        let resultadoImc = this.calcularImc()

        if (resultadoImc <= 19){
            return `Resultado do IMC: abaixo do peso`
        }else if (resultadoImc <= 25){
            return `peso normal`
        }else if(resultadoImc <= 30){
            return `acima do peso`
        } else{
            return 'obsidade'
        }
    }
}
let bruna = new pessoa("bruna", 1.70, 90)
console.log(bruna.verificarImc())
console.log(bruna.calcularImc())
