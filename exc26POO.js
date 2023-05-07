// Crie uma classe Carro que tenha as propriedades marca, modelo, ano e velocidade. Crie métodos acelerar(valor) e frear(valor)
//  que aumentem ou diminuam a velocidade 
// do carro e um método consultarVelocidade() que retorne a velocidade atual.
class carro{
    constructor(marca, modelo, ano, velocidade = 0){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
    }
    acelerar(vlr){
        return this.velocidade += vlr
    }
    freiar(){
        return this.velocidade = 0
    }
    consultarVelocidade(){
        return `velocidade ${this.velocidade}`
    }
}
let civic = new carro("Honda", "Civic", 2022, 20)
civic.acelerar(100)
console.log(civic.consultarVelocidade())