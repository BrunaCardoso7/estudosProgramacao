// Crie uma classe Triangulo que tenha as propriedades lado1,
// lado2 e lado3. Crie um método calcularPerimetro() que retorne o perímetro do triângulo e um método
// calcularArea() que retorne a área do triângulo.
class triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    calcularPerimetro(){
        return this.lado1 + this.lado2 + this.lado3
    }
}
let triangulo1 = new triangulo(10, 2, 40)
console.log(triangulo1.calcularPerimetro())