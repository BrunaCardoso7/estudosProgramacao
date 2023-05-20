class animal {
    constructor(animal){
        this.animal = animal
    }
    falar(){
        return 'sons emitidos por animais'
    }
}
class cachorro extends animal{
    falar(){
        return `${this.animal} faz au au`
    }
}
class gato extends animal{
    falar(){
        return `${this.animal} faz miau`
    }
}
let gato = new gato ("gato")
console.log(gato)

